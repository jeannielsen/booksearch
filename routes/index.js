// require "path" and set to constant path
const path = require("path");
// require the router from express and set to const router
const router = require("express").Router();
// require user defined ./api file and set to constant apiRoutes
const apiRoutes = require("./api");

// will look for apiRoutes in /api folder
router.use("/api", apiRoutes);

// returns a normalized path by merging two paths together
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

// exports the router modules and makes it available to other modules
module.exports = router;
