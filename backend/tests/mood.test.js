import request from require('supertest');
import app from require('../app');
import User from require('../models/User');
import MoodEntry from require('../models/MoodEntry');

describe('Mood Entry API', () => {
  let authToken;
  let testUser;

  beforeAll(async () => {
    // Create test user
    testUser = await User.create({
      email: 'testuser@moodtest.com',
      password: 'testpass123'
    });
  });

  beforeEach(async () => {
    // Login to get token
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'testuser@moodtest.com',
        password: 'testpass123'
      });
    authToken = res.body.token;
  });

  afterEach(async () => {
    await MoodEntry.deleteMany({});
  });

  test('Create mood entry - success', async () => {
    const res = await request(app)
      .post('/api/mood')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        moodScore: 7,
        journalText: 'Test journal entry'
      });
    
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.moodScore).toBe(7);
  });

  test('Get mood entries - success', async () => {
    // First create test entries
    await MoodEntry.create([
      {
        user: testUser._id,
        moodScore: 5,
        journalText: 'Entry 1'
      },
      {
        user: testUser._id,
        moodScore: 8,
        journalText: 'Entry 2'
      }
    ]);

    const res = await request(app)
      .get('/api/mood')
      .set('Authorization', `Bearer ${authToken}`);
    
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
    expect(res.body[0]).toHaveProperty('moodScore');
  });
});