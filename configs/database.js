const mongoose = require("mongoose");

const conectDB = async (req, res) => {
  try {
    mongoose.connect(process.env.DBURL);
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = conectDB;
