const { Router } = require("express");
const { movieController } = require("../controllers/index");
const { createMovie } = require("../controllers/index");

const router = Router();

router.get("/movies", movieController);

router.post("/movies", createMovie);

module.exports = router;
