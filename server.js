const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const db = require("./db");
const cors = require("cors");
const monsterRouter = require("./routes/monsters");
const locationRouter = require("./routes/locations");

db();

app.use(cors());
app.use(express.json());

app.use("/api/monsters", monsterRouter);
app.use("/api/locations", locationRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening on port", process.env.PORT || 3000);
});
