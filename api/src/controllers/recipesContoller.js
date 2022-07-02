require("dotenv").config();
const { Recipe, Diet } = require("../db.js");
const axios = require("axios");
const { Op } = require("sequelize");
const { API_KEY } = process.env;

function getRecipes(req, res, next) {

}

function getRecipeId(req, res, next) {

}

function postRecipe(req, res, next) {

}

module.exports = { getRecipes, getRecipeId, postRecipe };
