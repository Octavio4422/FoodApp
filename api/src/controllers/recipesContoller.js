require("dotenv").config();
const axios = require("axios");
const { Recipe, Diet } = require("../db.js");
const { apiParser, dbParser } = require("../utils/functions/parsers.js");
const { dietCreator } = require("../utils/functions/dietCreator.js");
const { queryCheck } = require("../utils/functions/queryCheck.js");
const { API_KEY } = process.env;

async function getRecipes(req, res) {
  let { name } = req.query;
  let initialRequest;
  let apiResponse;
  let dbresponse;

  try {
    if (!name) {
      initialRequest = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
      );
      apiResponse = initialRequest.data.results.map((r) => apiParser(r));
      dbresponse = await Recipe.findAll({ include: Diet });
      dbresponse = dbresponse.map((r) => dbParser(r));

      return res.status(200).json([...dbresponse, ...apiResponse]);
    }

    if (name) {
      name = name.trim().toLowerCase();

      initialRequest = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&query=${name}&number=100`
      );
      apiResponse = apiResponse = initialRequest.data.results.map((r) =>
        apiParser(r)
      );

      name = name.split(" ");
      dbresponse = await Recipe.findAll({ include: Diet });
      dbresponse = dbresponse.filter((r) => queryCheck(r.name, name));
      dbresponse = dbresponse.map((r) => dbParser(r));

      let response = [...apiResponse, ...dbresponse];

      if (!response.length) return res.status(400).send("not found");

      return res.status(200).json(response);
    }
  } catch (e) {
    console.log(e.message);
    return res.status(400).json("error in getRecipes")
  }
}

async function getRecipeId(req, res) {
  let { id } = req.params;
  id = id.trim().toLowerCase();
  let initialRequest;
  let apiResponse;
  let dbResponse;

  try {
    if (id.includes("-")) {
      dbResponse = await Recipe.findByPk(id, { include: Diet });
      if (!dbResponse) return res.status(400).send("not found");
      return res.status(200).json(dbParser(dbResponse));
    } else {
      initialRequest = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );
      apiResponse = apiParser(initialRequest.data);

      if (!apiResponse) return res.status(400).send("not found");
      return res.status(200).json(apiResponse);
    }
  } catch (e) {
    console.log(e.message);
    return res.status(400).json("error in getRecipesId")
  }
}

async function postRecipe(req, res) {
  const { name, summary, score, steps, diets } = req.body;

  //validation
  if(!name) return res.status(400).json("Name cannot be empty")
  if(!summary) return res.status(400).json("Summary cannot be empty")
  if(!diets.length) return res.status(400).json("The recipe must belong to a Diet")
  //validation
  try {
    await dietCreator();

    const [recipe, created] = await Recipe.findOrCreate({
      where: { name: name },
      defaults: {
        summary,
        score,
        steps,
      },
    });

    if (!created) return res.status(406).json("The recipe already exist");

    for (let i = 0; i < diets.length; i++) {
      const diet = await Diet.findOne({ where: { name: diets[i] } });
      await recipe.addDiet(diet);
    }

    const response = await Recipe.findOne({
      where: { name: name },
      include: Diet,
    });

    return res.status(201).json(dbParser(response));
  } catch (e) {
    console.log(e.message);
    return res.status(400).json("error in postRecipes")
  }
}

module.exports = { getRecipes, getRecipeId, postRecipe };
