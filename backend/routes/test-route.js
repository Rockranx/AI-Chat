import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import HuggingFaceService from "../services/HuggingFaceService.js";

const router = express.Router();

router.get("/test-login", async (req, res) => {
  const testPassword = "2t1estpassword1";
  const user = await User.findOne({ email: "21test1@example.com" }).select("+password");
  if (!user) return res.status(404).json({ error: "User not found" });

  const isMatch = await bcrypt.compare(testPassword, user.password);

  res.json({
    inputPassword: testPassword,
    storedHash: user.password,
    isMatch,
    passwordLength: testPassword.length,
    hashLength: user.password.length,
  });
});
router.get('/pure-bcrypt', async (req, res) => {
  const testPassword = "2t1estpassword1";
  
  // Generate fresh hash
  const salt = await bcrypt.genSalt(10);
  const newHash = await bcrypt.hash(testPassword, salt);
  
  // Compare with same password
  const match = await bcrypt.compare(testPassword, newHash);
  
  res.json({
    input: testPassword,
    generatedHash: newHash,
    immediateMatch: match,
    length: testPassword.length
  });
});
// routes/testRoutes.js
router.get('/transplant-test', async (req, res) => {
  try {
    // 1. First create a test user if doesn't exist
    let user = await User.findOne({ email: 'test-transplant@example.com' });
    
    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash("2t1estpassword1", salt);
      user = await User.create({
        email: 'test-transplant@example.com',
        password: hash
      });
      console.log('Created test user with hash:', hash);
    }

    // 2. Perform fresh hash generation
    const manualHash = await bcrypt.hash("2t1estpassword1", 10);
    
    // 3. Compare all variants
    const dbMatch = await bcrypt.compare("2t1estpassword1", user.password);
    const freshMatch = await bcrypt.compare("2t1estpassword1", manualHash);

    res.json({
      dbHash: user.password,
      manualHash: manualHash,
      dbMatch,
      freshMatch,
      structureMatch: user.password.length === manualHash.length,
      prefixMatch: user.password.substring(0, 7) === manualHash.substring(0, 7)
    });

  } catch (error) {
    console.error('Transplant test error:', error);
    res.status(500).json({ error: error.message });
  }
});
// routes/testRoutes.js
router.get('/direct-compare', async (req, res) => {
  const user = await User.findOne({ email: '21test1@example.com' });
  
  // Compare without any application logic
  const match = await bcrypt.compare(
    "2t1estpassword1", 
    user.password
  );
  
  res.json({
    directMatch: match,
    inputLength: "2t1estpassword1".length,
    storedHashLength: user.password.length
  });
}); 
// routes/testRoutes.js
router.get('/inspect-db', async (req, res) => {
  const user = await User.findOne({ email: 'test-transplant@example.com' });
  
  res.json({
    dbRecord: {
      email: user.email,
      password: user.password,
      length: user.password.length,
      // Add other fields if needed
    }
  });
});
router.get('/test-hf', (req, res) => {
  try {
    const testService = new HuggingFaceService();
    res.json({
      hasHistory: testService.conversationHistory instanceof Map
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default router