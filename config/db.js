const mongoose = require("mongoose");
const env = require("./envConfig");
const connect = async () => {
  try {
    const ress = await mongoose.connect(
      "mongodb+srv://ajay123:ajay123@cluster0.bwf1wzm.mongodb.net/",
      {
        serverSelectionTimeoutMS: 5000,
      }
    );
    console.log("database connected!");
  } catch (error) {
    console.log(error.message);
    process.exit;
  }
};

module.exports = connect;
