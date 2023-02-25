const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({

  title: String,
  author: String,
  ingredients: String,
  date: String,
  directions: String,
  user : {type : Schema.Types.ObjectId, ref: "User"}
 
});

module.exports = mongoose.model("Books", BooksSchema);