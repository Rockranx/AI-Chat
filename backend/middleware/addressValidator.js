export const validateCrisisAddress = (req, res, next) => {
  const { address } = req.body;
  
  if (!address?.full) {
    return res.status(400).json({
      error: 'Address must contain a "full" field',
      example: {
        full: "123 Main Street, City, Country"
      }
    });
  }

  // Basic format validation
  const validAddressRegex = /^[a-zA-Z0-9\s,.'-]{5,100}$/;
  if (!validAddressRegex.test(address.full)) {
    return res.status(400).json({
      error: 'Invalid address format',
      requirements: [
        '5-100 characters',
        'Only letters, numbers, and basic punctuation',
        'Must contain street and city'
      ]
    });
  }

  next();
};