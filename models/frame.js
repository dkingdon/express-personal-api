  var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var RatingSchema = new Schema({
    rating: String
  });

  var FrameSchema = new Schema({
    name: String,
    brand: String,
    material: String,
    suspension: Boolean,
    travel: String,
    year: String,
    price: String,
    imageURL: String,
    rating: String

  });



var Frame = mongoose.model('Frame', FrameSchema);

module.exports = Frame;
