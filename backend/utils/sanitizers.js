// utils/sanitizers.js
export const cleanResponseText = (text) => {
  return text
    // Remove all markdown formatting
    .replace(/\*\*|\*|### |__|_/g, '')
    // Clean numbered lists and examples
    .replace(/(\n\d+\.)\s+/g, '\n• ')  // Convert numbered lists to bullet points
    .replace(/(Example:\s*")/g, 'Example: ')  // Clean example formatting
    // Normalize line breaks and whitespace
    .replace(/\\n/g, '\n')
    .replace(/\n{2,}/g, '\n\n')
    .replace(/^\s+|\s+$/gm, '')  // Trim each line
    // Remove redundant colons and spacing
    .replace(/(\w+):\n/g, '$1\n')  // Fix header colon formatting
    // Clean special cases
    .replace(/\(\s*e\.g\./g, '(e.g.')
    .replace(/"\s*\)/g, ')')  // Fix quotation marks in examples
    // Final cleanup
    .trim()
    .replace(/ +/g, ' ')
    .replace(/\u00a0/g, ' '); 
}; 