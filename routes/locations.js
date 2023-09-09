const express = require("express");
const router = express.Router();
const location = require("../models/location");

router.get("/", async (req, res) => {
  const locations = await location.find();
  res.json({ locations: locations });
});

router.post("/new", async (req, res) => {
  await new location({ ...req.body }).save();
  res.status(201).json({ msg: "Created!" });
});

router.put("/:id", async (req, res) => {
  await location.findOneAndUpdate({ _id: req.params.id }, { ...req.body });
  res.status(200).json({ msg: "Updated!" });
});

router.delete("/:id", async (req, res) => {
  await location.deleteOne({ _id: req.params.id });
  res.status(200).json({ msg: "Deleted!" });
});

module.exports = router;
