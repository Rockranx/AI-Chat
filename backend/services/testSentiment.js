import HuggingFaceService from './HuggingFaceService.js';

const testConversation = async () => {
  const userId = 'test-user-123';
  const messages = [
    { role: 'user', content: "I'm feeling overwhelmed at work" },
    { role: 'user', content: "My boss is being unreasonable" }
  ];

  const response = await HuggingFaceService.generateResponse(userId, messages);
  console.log('AI Response:', response.text);
};

testConversation();