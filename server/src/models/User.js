// backend/src/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    contacts: {
      email: { type: String },
      phone: { type: String },
      linkedin: { type: String },
      github: { type: String },
      whatsapp: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
