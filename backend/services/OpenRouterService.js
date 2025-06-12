import fetch from 'node-fetch';
import logger from '../utils/logger.js';
import { cleanResponseText } from '../utils/sanitizers.js';
class OpenRouterService {
  constructor() {
    this.BASE_URL = 'https://openrouter.ai/api/v1';
    this.MODEL = 'deepseek/deepseek-chat-v3-0324:free';
    this.MAX_TOKENS = 32768; // Maximum allowed by OpenRouter
  }

  async generateResponse(messages) {
    try {
      const response = await fetch(`${this.BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'HTTP-Referer': process.env.CLIENT_URL,
          'X-Title': 'Mental Health Companion'
        },
        body: JSON.stringify({
          model: this.MODEL,
          messages: [{
            role: "system",
            content: `Provide complete, uninterrupted responses with:
1. Full sentence structures
2. Natural paragraph breaks
3. Complete explanations
4. No truncation
5. Markdown formatting for organization`
          }, ...messages],
          temperature: 0.7,
          max_tokens: this.MAX_TOKENS,
          stream: false
        })
      });

      const data = await response.json();
      return this.processResponse(data);
      
    } catch (error) {
      logger.error('OpenRouter Error:', error);
      return { text: "Let's continue our conversation. Could you rephrase or expand on your last thought?" };
    }
  }

processResponse(data) {
  try {
    let content = data.choices?.[0]?.message?.content || '';
    
    // Import and apply cleaner
    
    content = cleanResponseText(content);

    // Add final line break normalization
    content = content.split('\n').map(line => line.trim()).join('\n');

    return {
      text: content,
      raw: data
    };
  } catch (error) {
    return {
      text: "Let's focus on what matters most right now. How can I best support you?",
      raw: null
    };
  }
}
}

export default new OpenRouterService();