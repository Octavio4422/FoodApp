const { Router } = require("express");
const { getDiets } = require("../controllers/dietsController");
const router = Router();

router.get("/", getDiets)

module.exports = router;