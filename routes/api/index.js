// require "path" and set to constant path
const path = require("path");
// require the router from express and set to const router
const router = require("express").Router();
//requires the user defined bookRoutes and googleRoutes
const bookRoutes = require("./books");
const googleRoutes = require("./google");


// will look for the bookRoutes in /books file
router.use("/books", bookRoutes);
// will look for googleRoutes in the /google file
router.use("/google", googleRoutes);

// exports router and make it available to other modules
module.exports = router;
