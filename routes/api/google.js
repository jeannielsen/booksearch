// require the Express router and set it to constant router
const router = require("express").Router();
// require user defined googleController from the /controllers folder and the googleController file, set it to constant googleController
const googleController = require("../../controllers/googleController");


router
  
  .route("/")
   // queries the googleController to find all books
  .get(googleController.findAll);


  // exports the router to make it available to other modules
module.exports = router;
