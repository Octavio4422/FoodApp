const { dietCreator } = require("../utils/functions/dietCreator");

async function getDiets(req, res, next) {
  try {
    let response = await dietCreator();
    return res.status(200).json(response);
  } catch (e) {
    return next(e);
  }
}

module.exports = { getDiets };
