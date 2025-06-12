import { RateLimiterMemory } from 'rate-limiter-flexible';
import logger from '../utils/logger.js';

const rateLimiters = {
  public: new RateLimiterMemory({
    points: 100,
    duration: 15 * 60, // 15 minutes
    blockDuration: 60 * 60
  }),
  auth: new RateLimiterMemory({
    points: 5,
    duration: 60, // 1 minute
    blockDuration: 60 * 15
  }),
  communityWrite: new RateLimiterMemory({
    points: 15,
    duration: 60 * 60, // 1 hour
    blockDuration: 60 * 60
  }),
  communityVote: new RateLimiterMemory({
    points: 30,
    duration: 60 * 60, // 1 hour
    blockDuration: 60 * 60
  }),
  flagging: new RateLimiterMemory({
    points: 5,
    duration: 60 * 60 * 24, // 24 hours
    blockDuration: 60 * 60 * 24
  }),
  moodEntries: new RateLimiterMemory({
    points: 10, // 10 requests
    duration: 60 * 60, // 1 hour
    blockDuration: 60 * 60
  }),
  passwordReset: new RateLimiterMemory({
    points: 3, // 3 attempts
    duration: 60 * 60 * 24, // 24 hours
    blockDuration: 60 * 60 * 24
  })
};

export const rateLimit = (type = 'public') => {
  return async (req, res, next) => {
    const limiter = rateLimiters[type];
    const key = `${req.ip}:${req.user?.id || 'anon'}:${type}`;
    
    try {
      const rateLimitRes = await limiter.consume(key);
      res.set({
        'X-RateLimit-Limit': limiter.points,
        'X-RateLimit-Remaining': rateLimitRes.remainingPoints,
        'X-RateLimit-Reset': Math.ceil(rateLimitRes.msBeforeNext / 1000)
      });
      next();
    } catch (error) {
      res.set({
        'Retry-After': Math.ceil(error.msBeforeNext / 1000),
        'X-RateLimit-Reset': Math.ceil(error.msBeforeNext / 1000)
      });
      logger.warn(`Rate limit exceeded - ${key}`);
      res.status(429).json({
        error: 'Too many requests',
        waitSeconds: Math.ceil(error.msBeforeNext / 1000)
      });
    }
  };
};