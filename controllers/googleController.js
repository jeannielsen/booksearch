// requires axios, a promise-based async/await library for the readable asynchronous code and sets it to constant axios
const axios = require("axios");
// requires the database models and sets it to constant db
const db = require("../models");

// defines module export in the findAll function, it queries the googleapis url and returns results
module.exports = {
  findAll: function (req, res) {
    const { query: params } = req;
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      // returns the results for title, infolink, authors, description, images links
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      // then checks the database google id sting to the api book id, then if not the same it returns book, else catches error
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};
