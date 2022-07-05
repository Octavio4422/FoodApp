const { Diet } = require("../db");
const { dietCreator } = require("../utils/functions/dietCreator");

async function getDiets(req, res, next) {
  let dbresponse;

  try {
    dbresponse = await Diet.findAll();

    if (!dbresponse.length) {
      let response = await dietCreator();
      return res.status(200).json(response);
    } else {
      return res.status(200).json(dbresponse);
    }
  } catch (e) {
    return next(e);
  }
}

module.exports = { getDiets };
