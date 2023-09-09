const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  monsters: { type: Array, required: true },
});

const locationModel = mongoose.model("Location", locationSchema);

module.exports = locationModel;
