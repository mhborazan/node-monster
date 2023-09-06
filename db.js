const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("Connected to Mongoose Server");
  });

  mongoose.connection.on("error", () => {
    "Error Connecting to Mongoose Server";
  });
};
