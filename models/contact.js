const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
});

module.exports = mongoose.model('Contact', contactSchema);
