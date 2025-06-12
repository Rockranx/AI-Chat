import ChatSession from '../models/ChatSession.js';
import logger from '../utils/logger.js';

export const conversationContext = async (req, res, next) => {
  try {
    // Validate session ID format
    if (!req.params.sessionId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid session ID format' });
    }

    const session = await ChatSession.findOne({
      _id: req.params.sessionId,
      user: req.user.id // Ensure user owns the session
    }).select('messages context').lean();

    if (!session) {
      logger.warn(`Session not found: ${req.params.sessionId}`);
      req.conversationContext = null;
      return next();
    }

    req.conversationContext = {
      history: session.messages,
      topics: session.context?.mainTopics || [],
      emotionalState: session.context?.emotionalState || 'neutral'
    };

    next();
  } catch (error) {
    logger.error('Context Loading Error:', error);
    res.status(500).json({ 
      error: 'Failed to load conversation context',
      details: error.message 
    });
  }
};
export const trackConversationContext = async (req, res, next) => {
  try {
    const session = await ChatSession.findById(req.params.sessionId)
      .select('messages context')
      .lean();

    if (session) {
      req.conversationContext = {
        history: session.messages,
        keyTopics: session.context?.keyTopics || [],
        emotionalState: session.context?.emotionalTimeline.slice(-1)[0] || {}
      };
    }

    next();
  } catch (error) {
    next(error);
  }
};
export const buildConversationThread = async (req, res, next) => {
  try {
    const session = await ChatSession.findById(req.params.sessionId)
      .select('messages context')
      .lean();

    if (session) {
      req.conversationThread = session.messages
        .slice(-6)
        .map(m => `${m.role}: ${m.content}`);
      
      req.keyPhrases = session.context?.keyPhrases || [];
    }

    next();
  } catch (error) {
    next(error);
  }
};