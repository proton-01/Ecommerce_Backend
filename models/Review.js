const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    productId: { type: Number, required: true },
    reviewText: { type: String, required: true },
    postedBy: { type: String, required: true },
    starRating: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
