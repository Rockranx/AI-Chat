import { analyzeSentiment } from './sentimentServices.js';

class ContextManager {
  constructor() {
    this.contexts = new Map();
  }

  getContext(userId) {
    if (!this.contexts.has(userId)) {
      this.contexts.set(userId, {
        topics: new Set(),
        emotionalState: 'neutral',
        lastMessages: []
      });
    }
    return this.contexts.get(userId);
  }

  updateContext(userId, message, response) {
    const context = this.getContext(userId);
    
    // Analyze message content
    const messageAnalysis = analyzeSentiment(message);
    const responseAnalysis = analyzeSentiment(response);

    // Update conversation topics
    [...messageAnalysis.keywords, ...responseAnalysis.keywords]
      .forEach(keyword => context.topics.add(keyword));

    // Update emotional state
    context.emotionalState = this.calculateEmotionalState(
      messageAnalysis.score,
      responseAnalysis.score
    );

    // Maintain message history
    context.lastMessages.push({ message, response });
    if (context.lastMessages.length > 6) {
      context.lastMessages.shift();
    }

    return context;
  }

  calculateEmotionalState(userScore, responseScore) {
    const avgScore = (userScore + responseScore) / 2;
    if (avgScore < -0.6) return 'crisis';
    if (avgScore < -0.2) return 'distressed';
    if (avgScore < 0.2) return 'neutral';
    return 'positive';
  }
}

export default new ContextManager();