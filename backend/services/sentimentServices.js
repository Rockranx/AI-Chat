import natural from 'natural';
import stopword from 'stopword';

const tokenizer = new natural.WordTokenizer();
const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');

// Precision-tuned word scoring
const WORD_SCORES = {
  // Positive Words (Tiered by Intensity)
  'ecstatic': 1.0, 'euphoric': 1.0, 'overjoyed': 1.0, 'thrilled': 0.95,
  'delighted': 0.9, 'excellent': 0.9, 'fantastic': 0.9, 'phenomenal': 0.9,
  'wonderful': 0.85, 'amazing': 0.85, 'awesome': 0.85, 'blissful': 0.85,
  'great': 0.75, 'superb': 0.75, 'terrific': 0.75, 'joyful': 0.7,
  'good': 0.65, 'happy': 0.65, 'pleased': 0.65, 'content': 0.6,
  'positive': 0.55, 'progress': 0.55, 'optimistic': 0.55, 'hopeful': 0.5,
  'satisfied': 0.5, 'calm': 0.45, 'peaceful': 0.45, 'relaxed': 0.4,
  'okay': 0.3, 'fine': 0.3, 'alright': 0.2,

  // Negative Words (Tiered by Intensity)
  'devastated': -1.0, 'miserable': -1.0, 'heartbroken': -1.0, 'despair': -1.0,
  'horrible': -0.9, 'dreadful': -0.9, 'awful': -0.85, 'terrible': -0.85,
  'disgusting': -0.8, 'appalling': -0.8, 'atrocious': -0.8, 'abysmal': -0.75,
  'bad': -0.65, 'upset': -0.65, 'unhappy': -0.65, 'sad': -0.6,
  'depressed': -0.6, 'gloomy': -0.6, 'angry': -0.55, 'furious': -0.55,
  'frustrated': -0.5, 'annoyed': -0.45, 'irritated': -0.4, 'stressed': -0.4,
  'anxious': -0.35, 'worried': -0.35, 'nervous': -0.3, 'tired': -0.2,
  'bored': -0.15, 'meh': -0.1,

  // Modifiers/Intensifiers
  'absolutely': 0.4, 'completely': 0.3, 'extremely': 0.3, 'totally': 0.25,
  'utterly': 0.25, 'perfectly': 0.2, 'really': 0.15, 'very': 0.1,
  'somewhat': -0.1, 'slightly': -0.05, 'barely': -0.05, 'not': -0.3,
  'never': -0.4, 'nothing': -0.3, 'nobody': -0.2
};

// Words to exclude from keywords
const IGNORED_WORDS = new Set([
  'that', 'this', 'with', 'about', 'have', 
  'they', 'just', 'some', 'than', 'were',
  'there', 'which'
]);

export const analyzeSentiment = (text) => {
  if (!text?.trim()) return { score: 0, keywords: [] };

  try {
    // 1. Tokenize and clean input
    let tokens = tokenizer.tokenize(text.toLowerCase());
    tokens = stopword.removeStopwords(tokens);
    
    // 2. Calculate enhanced sentiment score
    let totalWeight = 0;
    let score = tokens.reduce((sum, word) => {
      const wordScore = WORD_SCORES[word] || (analyzer.getSentiment([word]) * 0.6);
      const weight = Math.abs(wordScore) * 2.5 + 1; // Dynamic weighting
      totalWeight += weight;
      return sum + (wordScore * weight);
    }, 0);
    
    // 3. Normalize and adjust final score
    score = totalWeight > 0 ? score / totalWeight : 0;
    score = Math.max(-1, Math.min(1, score * 1.4)); // Adjusted amplification
    
    // 4. Extract premium keywords
    const keywords = [...new Set(tokens)]
      .filter(word => word.length > 3 && !IGNORED_WORDS.has(word))
      .sort((a, b) => {
        // Sort by emotional impact then length
        const aImpact = Math.abs(WORD_SCORES[a] || 0.3);
        const bImpact = Math.abs(WORD_SCORES[b] || 0.3);
        return bImpact - aImpact || b.length - a.length;
      })
      .slice(0, 4); // Return top 3 most significant keywords

    return {
      score: parseFloat(score.toFixed(2)),
      keywords
    };
  } catch (error) {
    console.error('Analysis error:', error);
    return enhancedFallback(text);
  }
};

function enhancedFallback(text) {
  const tokens = (text.toLowerCase().match(/\b\w{3,}\b/g) || [])
    .filter(word => !IGNORED_WORDS.has(word));
  
  let score = tokens.reduce((sum, word) => {
    return sum + (WORD_SCORES[word] || 0);
  }, 0);
  
  // Normalize fallback score
  score = tokens.length > 0 ? score / tokens.length : 0;
  
  return {
    score: parseFloat(Math.max(-1, Math.min(1, score * 1.3)).toFixed(2)),
    keywords: tokens
      .filter(word => WORD_SCORES[word])
      .sort((a, b) => Math.abs(WORD_SCORES[b]) - Math.abs(WORD_SCORES[a]))
      .slice(0, 3)
  };
}