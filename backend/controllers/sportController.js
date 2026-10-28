const Sport = require("../models/Sport");

exports.createSport = async (req, res) => {
  const sport = new Sport(req.body);
  await sport.save();
  res.json(sport);
};

exports.getSports = async (req, res) => {
  const sports = await Sport.find();
  res.json(sports);
};