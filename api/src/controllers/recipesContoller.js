require("dotenv").config();
const axios = require("axios");
const { Recipe, Diet } = require("../db.js");
const { Op } = require("sequelize");
const { apiParser } = require("../utils/functions/apiParser.js");
const { response } = require("express");
const { API_KEY } = process.env;

function getRecipes(req, res, next) {
  const { name } = req.query;
  let apiResponse;

  if (!name) {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
      )
      .then((response) => {
        apiResponse = response.data.results.map((r) => apiParser(r));
        return Recipe.findAll({ include: Diet });
      })
      .then((dbresponse) => {
        return res.status(200).json([...dbresponse, ...apiResponse]);
      })
      .catch((e) => {
        return next(e);
      });
  }

  if (name) {
  }
}

function getRecipeId(req, res, next) {
  const { id } = req.params;
}

function postRecipe(req, res, next) {
  const { name, resume, score, steps } = req.body;
}

module.exports = { getRecipes, getRecipeId, postRecipe };
