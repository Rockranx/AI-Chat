// tests/chat.test.js
import assert from 'assert';
import HuggingFaceService from '../services/HuggingFaceService.js';

describe('Chat Context Handling', () => {
  const testMessages = [
    { role: 'user', content: 'I\'m struggling with depression', timestamp: new Date() },
    { role: 'assistant', content: 'That sounds difficult. How long have you felt this way?', timestamp: new Date() },
    { role: 'user', content: 'About 6 months', timestamp: new Date() }
  ];

  it('should maintain 3-message context', async () => {
    const response = await HuggingFaceService.generateResponse(testMessages);
    assert.match(response.text, /depression|struggling|months/i);
  });
});