const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const db = require("./db");
const cors = require("cors");
const monster = require("./models/monster");
db();

app.use(cors());
app.use(express.json());

app.get("/api/monsters", async (req, res) => {
  const monsters = await monster.find();
  res.json({ monsters: monsters });
});

app.post("/api/monster", async (req, res) => {
  await new monster({ ...req.body }).save();
  res.status(201).json({ msg: "Created!" });
});

app.put("/api/monster/:id", async (req, res) => {
  await monster.findOneAndUpdate({ _id: req.params.id }, { ...req.body });
  res.status(200).json({ msg: "Updated!" });
});

app.delete("/api/monster/:id", async (req, res) => {
  await monster.deleteOne({ _id: req.params.id });
  res.status(200).json({ msg: "Deleted!" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening on port", process.env.PORT);
});
