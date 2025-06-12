import {JSDOM} from  'jsdom'
import DOMPurify from "dompurify"
export const sanitizeMessage = (req, res, next) => {
  try {
    if (req.body.message !== undefined) {
      // Convert to string and clean 
      const raw = String(req.body.message);
      const cleaned = raw
        .replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, " ") // Remove invalid chars
        .replace(/\*\*|\*/g, "") // Remove bold/italic markers
        .replace(/\\"/g, '"') // Unescape quotes
        .replace(/<[^>]+>/g, "") // Remove any HTML tags
        .replace(/\n{3,}/g, "\n\n") // Limit consecutive newlines
        .replace(/^\s+|\s+$/g, "") // Trim whitespace
        .replace(/\u00a0/g, " ")
        .replace(/\s{2,}/g, " ") // Collapse whitespace
        .trim();

      // Ensure minimum content
      req.body.message = cleaned || "I need support";
    }
    next();
  } catch (error) {
    res.status(400).json({
      error: "Message sanitization failed", 
      details: error.message,
    });
  }
};




const window = new JSDOM('').window;
const domPurify = DOMPurify(window);

export const sanitizePostInput = (req, res, next) => {
  if (req.body.title) {
    req.body.title = domPurify.sanitize(req.body.title).trim();
  }
  if (req.body.content) {
    req.body.content = domPurify.sanitize(req.body.content, {
      ALLOWED_TAGS: ['em', 'strong', 'p', 'ul', 'li', 'ol'],
      ALLOWED_ATTR: []
    }).trim();
  }
  next();
};

export const sanitizeCommentInput = (req, res, next) => {
  if (req.body.content) {
    req.body.content = domPurify.sanitize(req.body.content, {
      ALLOWED_TAGS: ['em', 'strong'],
      ALLOWED_ATTR: []
    }).trim();
  }
  next();
};
export const sanitizeCrisisCenterInput = (req, res, next) => {
  if (req.body.name) {
    req.body.name = domPurify.sanitize(req.body.name).trim();
  }
  if (req.body.address?.full) {
    req.body.address.full = domPurify.sanitize(req.body.address.full).trim();
  }
  if (req.body.phone) {
    req.body.phone = domPurify.sanitize(req.body.phone).trim();
  }
  if (req.body.services) {
    req.body.services = req.body.services.map(service => 
      domPurify.sanitize(service).trim()
    );
  }
  next();
};

export const sanitizeMoodEntryInput = (req, res, next) => {
  if (req.body.journalText) {
    req.body.journalText = domPurify.sanitize(req.body.journalText, {
      ALLOWED_TAGS: ['em', 'strong'],
      ALLOWED_ATTR: []
    }).trim();
  }
  next();
};