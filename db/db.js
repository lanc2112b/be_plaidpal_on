const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(
    /*`mongodb+srv://mikegreenan98:plaidPal@cluster1.qfpekly.mongodb.net/test`,*/
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@testing.4yxs9ta.mongodb.net/users`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
