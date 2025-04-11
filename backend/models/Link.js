import mongoose from 'mongoose';
const linkSchema = new mongoose.Schema({
  longUrl: String,
  shortCode: String,
  userId: String,
  alias: String,
  expirationDate: Date,
  createdAt: { type: Date, default: Date.now },
  clicks: { type: Number, default: 0 },
  analytics: [{
    timestamp: Date,
    ip: String,
    device: String,
    browser: String,
  }]
});
export default mongoose.model('Link', linkSchema);
