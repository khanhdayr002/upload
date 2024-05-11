const { errorHandler } = require("../utils");

exports.bot = async (req, res, next) => {
  var data= require('fs-extra').readFileSync(__dirname + '/../cosplay.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"data":`${link}`});
};