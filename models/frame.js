  var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var FrameSchema = new Schema({
    name: String,
    brand: String,
    material: String,
    suspension: Boolean,
    travel: String,
    year: String,
    price: String,
    imageURL: String
  });

var Frame = mongoose.model('Frame', FrameSchema);

module.exports = Frame;
