import ChatSession from "../models/ChatSession.js";

import OpenRouterService from "../services/OpenRouterService.js";


export const createSession = async (req, res) => {
  try {
    const session = await ChatSession.create({
      user: req.user.id,
      messages: [
        {
          role: "assistant",
          content: "Hello! I'm here to listen. How can I support you today?",
          timestamp: new Date(),
        },
      ],
    });

    res.status(201).json({
      id: session._id,
      initialMessage: session.messages[0].content,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to create session",
      details: error.message,
    });
  }
};
export const postMessage = async (req, res) => {
  try {
    const { sessionId } = req.params;
    let { message } = req.body;

    // Validate input type
    if (typeof message !== 'string') {
      message = String(message);
    }

    // Clean and validate message
    const cleanMessage = message.trim();
    if (!cleanMessage || cleanMessage.length > 5000) {
      return res.status(400).json({ 
        error: 'Message must be 1-5000 characters' 
      });
    }

    // Validate session
    const session = await ChatSession.findOne({
      _id: sessionId,
      user: req.user.id
    });
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    // Add user message
    session.messages.push({
      role: 'user',
      content: cleanMessage,
      timestamp: new Date()
    });

    // Get AI response with guaranteed content
    const aiResponse = await OpenRouterService.generateResponse(
      session.messages
    );
    
    // Validate AI response
    if (!aiResponse.text || typeof aiResponse.text !== 'string') {
      throw new Error('Invalid AI response format');
    }
    
    const cleanAIResponse = aiResponse.text.trim();
    if (!cleanAIResponse) {
      throw new Error('Empty AI response content');
    }

    // Add validated AI response
    session.messages.push({
      role: 'assistant',
      content: cleanAIResponse,
      timestamp: new Date()
    });

    // Final validation
    const validationError = session.validateSync();
    if (validationError) {
      throw new Error(`Session validation failed: ${validationError.message}`);
    }

    await session.save();

    res.json({
      sessionId: session._id,
      response: cleanAIResponse
    });

  } catch (error) {
    res.status(500).json({
      error: 'Message processing failed',
      details: error.message
    });
  }
};
export const getChatHistory = async (req, res) => {
  try {
    const sessions = await ChatSession.find({ user: req.user.id })
      .sort("-createdAt")
      .select("_id createdAt updatedAt messages")
      .lean();

    res.json(
      sessions.map((session) => ({
        id: session._id,
        createdAt: session.createdAt,
        updatedAt: session.updatedAt,
        preview:
          session.messages.filter((m) => m.role === "user").slice(-1)[0]
            ?.content || "New conversation",
      }))
    );
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve history",
      details: error.message,
    });
  }
};

export const getSessionDetails = async (req, res) => {
  try {
    const session = await ChatSession.findOne({
      _id: req.params.sessionId,
      user: req.user.id,
    }).lean();

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    res.json({
      id: session._id,
      createdAt: session.createdAt,
      messages: session.messages.map((m) => ({
        role: m.role,
        content: m.content,
        timestamp: m.timestamp,
      })),
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to get session details",
      details: error.message,
    });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const session = await ChatSession.findById(req.params.sessionId);
    
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    const message = session.messages.id(req.params.messageId);
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }

    if (!message.author.equals(req.user.id) && req.user.role === 'user') {
      return res.status(403).json({ error: 'Not authorized' });
    }

    session.messages.pull(req.params.messageId);
    await session.save();
    
    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Message deletion failed' });
  }
};