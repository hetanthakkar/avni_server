var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ratingSchema = new Schema({
  rating: Number,
  category: String,
});

var interestedSchema = new Schema({
  interested: { type: Array, default: [1] },
});
mongoose.model("Rating", ratingSchema);
mongoose.model("Interested", interestedSchema);
