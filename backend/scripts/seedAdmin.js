import mongoose from 'mongoose';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import "dotenv/config"; // Add this to load .env file

const seedAdmin = async () => {
  try {
    // Verify environment variables
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGO_URI environment variable not defined');
    }
    
    if (!process.env.ADMIN_INITIAL_PASSWORD) {
      throw new Error('ADMIN_INITIAL_PASSWORD environment variable not defined');
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminExists = await User.findOne({ role: 'admin' });
    
    if (!adminExists) {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(process.env.ADMIN_INITIAL_PASSWORD, salt);
      
      await User.create({
        email: 'admin@example.com',
        password,
        role: 'admin',
        isVerified: true
      });
      console.log('✅ Admin user created');
    } else {
      console.log('ℹ️ Admin user already exists');
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Seed Error:', error.message);
    process.exit(1);
  }
};

seedAdmin();