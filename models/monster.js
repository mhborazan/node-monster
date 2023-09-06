const mongoose = require("mongoose");

const monsterSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  hp: {
    type: Number,
    required: true,
  },
  atk: {
    type: Number,
    required: true,
  },
  def: {
    type: Number,
    required: true,
  },
  exp: {
    type: Number,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
  special: {
    type: String,
  },
});

const monsterModel = mongoose.model("Monsters", monsterSchema);

module.exports = monsterModel;
