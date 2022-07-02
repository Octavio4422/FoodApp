const { Router } = require("express");
const router = Router();
// Importar todos los routers;
const recipesRoute = require("./recipes");
const dietsRoute = require("./diets");

// Configurar los routers
router.use("/recipes", recipesRoute);
router.use("/diets", dietsRoute);

module.exports = router;
