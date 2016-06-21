//models/coffee.js
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CoffeeSchema = new Schema({
  name: String,
  address: String
});

module.exports = mongoose.model('Coffee', CoffeeSchema);
