import mongoose from 'mongoose';

const crisisCenterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Center name is required'],
    index: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
    full: {
      type: String,
      required: true
    }
  },
  formattedAddress: String,
  phone: String,
  services: [{
    type: String,
    enum: ['counseling', 'hotline', 'shelter', 'medical', 'virtual']
  }],
  location: {
    type: {
      type: String,
      default: 'Point',
      enum: ['Point']
    },
    coordinates: [Number]
  },
  geoapifyData: mongoose.Schema.Types.Mixed,
  availability: {
    hours: String,
    days: [String]
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Geospatial index for location searches
crisisCenterSchema.index({ location: '2dsphere' });

export default mongoose.model('CrisisCenter', crisisCenterSchema);