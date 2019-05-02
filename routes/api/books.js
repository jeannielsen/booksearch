// Requires express router, middleware that helps in the creation of route handlers and sets the constant router
const router = require("express").Router();
// Requires user generated file bookController
const bookController = require("../../controllers/bookController");


router.route("/")
  // queries the bookController to find all books
  .get(bookController.findAll)
  // creates the post 
  .post(bookController.create);

// Matches to anything with an :id
router.route("/:id")
  // queries the bookController to find books by id
  .get(bookController.findById)
  // creates the update post
  .put(bookController.update)
  // delete the book from the databasse
  .delete(bookController.remove);

// exports the outer modules and makes it available to other modules
module.exports = router;
