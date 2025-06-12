import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['user', 'assistant', 'system'],
    required: [true, 'Role is required'],
    validate: {
      validator: (v) => ['user', 'assistant', 'system'].includes(v),
      message: 'Invalid message role'
    }
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
    validate: {
      validator: (v) => typeof v === 'string' && v.trim().length > 0,
      message: 'Content cannot be empty'
    },
    set: (v) => typeof v === 'string' ? v.trim() : String(v).trim()
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true
  }
});

const chatSessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  messages: {
    type: [messageSchema],
    validate: {
      validator: (v) => Array.isArray(v) && v.length > 0,
      message: 'Session must contain at least one message'
    }
  }
}, {
  timestamps: true,
  bufferCommands: false,
  autoCreate: false
});

// Pre-save validation hook
chatSessionSchema.pre('save', function(next) {
  this.messages = this.messages.filter(msg => 
    msg.content && 
    typeof msg.content === 'string' && 
    msg.content.trim().length > 0
  );
  
  if (this.messages.length === 0) {
    this.messages.push({
      role: 'system',
      content: 'New conversation started',
      timestamp: new Date()
    });
  }
  
  next();
});

export default mongoose.model('ChatSession', chatSessionSchema);