const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
