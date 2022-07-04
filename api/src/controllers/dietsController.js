
const { Diet } = require("../db.js");

async function getDiets(req, res, next) {
  let dbresponse;
  
  try {
    dbresponse = await Diet.findAll();

    if (!dbresponse.length){
        let response = await Diet.bulkCreate(diets);
        return res.status(200).json(response);
    } else {
        return res.status(200).json(dbresponse);
    }
  } catch (e) {
    return next(e);
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

module.exports = { getDiets };
