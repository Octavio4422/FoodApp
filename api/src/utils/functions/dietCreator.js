const { Diet } = require("../../db");

async function dietCreator() {
  try {
    let dbresponse = await Diet.findAll();

    if (!dbresponse.length) {
      let response = await Diet.bulkCreate(diets);
      return response;
    } else {
      return dbresponse;
    }
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
