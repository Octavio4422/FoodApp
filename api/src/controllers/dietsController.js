const { dietCreator } = require("../utils/functions/dietCreator");

async function getDiets(req, res) {
  try {
    let response = await dietCreator();
    return res.status(200).json(response);
  } catch (e) {
    console.log(e.message);
    return res.status(400).json("Error in getDiets")
  }
}

module.exports = { getDiets };
