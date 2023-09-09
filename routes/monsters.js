const express = require("express");
const router = express.Router();
const monster = require("../models/monster");

router.get("/", async (req, res) => {
  const monsters = await monster.find();
  res.json({ monsters: monsters });
});

router.post("/new", async (req, res) => {
  await new monster({ ...req.body }).save();
  res.status(201).json({ msg: "Created!" });
});

router.put("/:id", async (req, res) => {
  await monster.findOneAndUpdate({ _id: req.params.id }, { ...req.body });
  res.status(200).json({ msg: "Updated!" });
});

router.delete("/:id", async (req, res) => {
  await monster.deleteOne({ _id: req.params.id });
  res.status(200).json({ msg: "Deleted!" });
});

module.exports = router;
