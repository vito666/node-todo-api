const mongoose = require('mongoose');

const User = mongoose.model('Users', {
  email: {
    required: true,
    trim: true,
    type: String,
    minlength: 1,
  },
});

module.exports = {
  User,
};
