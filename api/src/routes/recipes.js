const { Router } = require("express");
const router = Router();
const {
  getRecipes,
  getRecipeId,
  postRecipe,
} = require("../controllers/recipesContoller");

router.get("/", getRecipes);

router.get("/:id", getRecipeId);

router.post("/", postRecipe);

module.exports = router;
