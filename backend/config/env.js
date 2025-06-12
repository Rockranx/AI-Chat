export const checkEnv = () => {
  const requiredVars = [
    'JWT_SECRET',
    'MONGODB_URI',
    'PORT'
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    throw new Error(`Missing environment variables: ${missingVars.join(', ')}`);
  }
};