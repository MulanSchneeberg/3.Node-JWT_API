const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(StatusCodes.OK).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });

  // send the token back to the clinet
};

module.exports = dashboard;
