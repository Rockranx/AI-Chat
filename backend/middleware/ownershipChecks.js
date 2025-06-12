// middleware/ownershipChecks.js
import mongoose from 'mongoose';
import MoodEntry from '../models/MoodEntry.js';
import ChatSession from '../models/ChatSession.js';
import Post from '../models/Post.js';

export const checkPostOwnership = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    
    if (!post) return res.status(404).json({ error: 'Post not found' });
    if (!post.author.equals(req.user.id) && req.user.role === 'user') {
      return res.status(403).json({ error: 'Not authorized' });
    }
    
    next();
  } catch (error) {
    res.status(500).json({ error: 'Ownership verification failed' });
  }
};

export const checkMoodEntryOwnership = async (req, res, next) => {
  try {
    const entry = await MoodEntry.findById(req.params.id);
    
    if (!entry) return res.status(404).json({ error: 'Entry not found' });
    if (!entry.user.equals(req.user.id) && req.user.role === 'user') {
      return res.status(403).json({ error: 'Not authorized' });
    }
    
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const checkChatSessionOwnership = async (req, res, next) => {
  try {
    const session = await ChatSession.findById(req.params.sessionId);
    
    if (!session) return res.status(404).json({ error: 'Session not found' });
    if (!session.user.equals(req.user.id)) {
      return res.status(403).json({ error: 'Session access denied' });
    }
    
    next();
  } catch (error) {
    res.status(500).json({ error: 'Session verification failed' });
  }
};