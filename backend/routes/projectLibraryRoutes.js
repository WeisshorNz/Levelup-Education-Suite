const projectLibraryController = require("../controllers/projectLibraryController");
const express = require("express");
const router = express.Router();

router.get("/api/project-library/", projectLibraryController);

module.exports = router;
// Luis Route, used in Student Project Library page