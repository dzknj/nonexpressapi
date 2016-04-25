const mongoose = require('mongoose');

var animalSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  type: String
});

module.exports = mongoose.model('Animal', animalSchema);
