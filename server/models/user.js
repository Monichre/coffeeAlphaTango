//models/user.js
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  accounts: [String],
  coffeeShops: [String],
  lastCoffeeId: String
});

module.exports = mongoose.model('User', UserSchema);
