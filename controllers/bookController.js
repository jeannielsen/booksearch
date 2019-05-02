// Requires the user defined /models and set to constant db
const db = require("../models");

// Requests the findAll function to find all books in the database, then returns the results in JSON format and catches errors 
module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // Requests the findById function to find books by id in the database, then returns the results in JSON format and catches errors 
  findById: function (req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
    // Requests the create function to create a new saved book in the database, then returns the results in JSON format and catches errors 
  create: function (req, res) {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
     // Requests the update function to update the books in the database, then returns the results in JSON format and catches errors 
  update: function (req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
     // Requests the remove function to delete a book by id in the database, then returns the results in JSON format and catches errors 
  remove: function (req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};
