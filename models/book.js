// require mongoose for database set it to constant mongoose
const mongoose = require("mongoose");
// set constant Schema equal to mongoose.Schema
const Schema = mongoose.Schema;

// In Mongoose ‘schema’ is a document data structure (or shape of the document) that is enforced via the application layer.
// This is setting the constant bookSchema to new Schema which will hold the title, subtitle, authors, etc. of the books that are saved.
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

// Sets the constant Book to mongoose.model which will have a string with the book name and the bookSchema
const Book = mongoose.model("Book", bookSchema);

// exports the module Book to make it available to other modules
module.exports = Book;
