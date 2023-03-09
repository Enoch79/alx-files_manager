const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  create_at: {
    type: Date,
    default: Date.nw,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
