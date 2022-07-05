const { Diet } = require("../../db");

async function dietCreator() {
  try {
    let response = await Diet.bulkCreate(diets);
    return response;
  } catch (e) {
    console.log(e);
  }
}

const diets = [
  {
    name: "Gluten Free",
  },
  {
    name: "Ketogenic",
  },
  {
    name: "Vegetarian",
  },
  {
    name: "Lacto-Vegetarian",
  },
  {
    name: "Ovo-Vegetarian",
  },
  {
    name: "Vegan",
  },
  {
    name: "Pescetarian",
  },
  {
    name: "Paleo",
  },
  {
    name: "Primal",
  },
  {
    name: "Whole 30",
  },
];

module.exports = { dietCreator };
