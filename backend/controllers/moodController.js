import MoodEntry from '../models/MoodEntry.js';
import { analyzeSentiment } from '../services/sentimentServices.js';

// Create a new mood entry
export const createEntry = async (req, res) => {
  try {
    const { moodScore, journalText, tags } = req.body;
    
    // Validate required fields
    if (typeof moodScore !== 'number' || moodScore < 1 || moodScore > 10) {
      return res.status(400).json({ error: 'Mood score must be between 1-10' });
    }

    // Analyze sentiment and extract keywords
    const { score, keywords } = analyzeSentiment(journalText || '');

    const entry = await MoodEntry.create({
      user: req.user.id,
      moodScore,
      journalText,
      tags: tags || [],
      derivedInsights: {
        sentiment: score,
        keywords
      }
    });

    res.status(201).json({
      id: entry._id,
      moodScore: entry.moodScore,
      sentiment: entry.derivedInsights.sentiment,
      keywords: entry.derivedInsights.keywords,
      createdAt: entry.createdAt
    });

  } catch (error) {
    console.error('Create entry error:', error);
    res.status(500).json({ 
      error: 'Failed to create entry',
      details: error.message 
    });
  }
};

// Get paginated mood entries
export const getEntries = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const entries = await MoodEntry.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const totalEntries = await MoodEntry.countDocuments({ user: req.user.id });

    res.json({
      entries: entries.map(entry => ({
        id: entry._id,
        moodScore: entry.moodScore,
        journalText: entry.journalText,
        sentiment: entry.derivedInsights.sentiment,
        keywords: entry.derivedInsights.keywords,
        createdAt: entry.createdAt,
        tags: entry.tags
      })),
      pagination: {
        page,
        limit,
        total: totalEntries,
        pages: Math.ceil(totalEntries / limit)
      }
    });

  } catch (error) {
    console.error('Get entries error:', error);
    res.status(500).json({ error: 'Failed to get entries' });
  }
};

// Search mood entries
export const searchEntries = async (req, res) => {
  try {
    const { query, startDate, endDate } = req.query;
    
    // Base query
    const searchQuery = { user: req.user.id };

    // Text search
    if (query) {
      searchQuery.$text = { $search: query };
    }

    // Date range filter
    if (startDate || endDate) {
      searchQuery.createdAt = {};
      if (startDate) searchQuery.createdAt.$gte = new Date(startDate);
      if (endDate) searchQuery.createdAt.$lte = new Date(endDate);
    }

    const entries = await MoodEntry.find(searchQuery)
      .sort({ createdAt: -1 })
      .limit(20)
      .lean();

    res.json({
      results: entries.map(entry => ({
        id: entry._id,
        moodScore: entry.moodScore,
        preview: entry.journalText?.substring(0, 100),
        sentiment: entry.derivedInsights.sentiment,
        createdAt: entry.createdAt
      })),
      count: entries.length
    });

  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Search failed' });
  }
};

// Get single entry by ID
export const getEntry = async (req, res) => {
  try {
    const entry = await MoodEntry.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!entry) {
      return res.status(404).json({ error: 'Entry not found' });
    }

    res.json({
      id: entry._id,
      moodScore: entry.moodScore,
      journalText: entry.journalText,
      sentiment: entry.derivedInsights.sentiment,
      keywords: entry.derivedInsights.keywords,
      tags: entry.tags,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt
    });

  } catch (error) {
    console.error('Get entry error:', error);
    res.status(500).json({ error: 'Failed to get entry' });
  }
};
export const deleteEntry = async (req, res) => {
  try {
    await MoodEntry.findByIdAndDelete(req.params.id);
    res.json({ message: 'Entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Entry deletion failed' });
  }
};