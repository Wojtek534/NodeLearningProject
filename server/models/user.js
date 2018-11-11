var { mongoose } = require('../db/mongoose.js');

var User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15
  },
  email: {
    type: String,
    required: true,
    minlength: 3
  }
});

module.exports = { User };
