const mongoose = require("mongoose");

const NameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique:false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Name", NameSchema);