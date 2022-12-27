const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const BadRequestError = require("../errors/bad-request");
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("please provide right credentials");
  }

  // construct the jwt token
  const id = new Date().getDate();
  const token = jwt.sign(
    { id: id, username: username },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
  console.log(token);

  // send the token back to the clinet
  res.status(StatusCodes.CREATED).json({ username: username, token });
};

module.exports = login;
