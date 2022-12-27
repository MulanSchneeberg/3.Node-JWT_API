const jwt = require("jsonwebtoken");
const UnauthenticatedError = require("../errors/unauth");
const authMiddleware = async (req, res, next) => {
  const bear_token = req.headers.authorization;
  if (!bear_token || !bear_token.startsWith("Bearer ")) {
    throw new UnauthenticatedError("no valid bear token");
  }
  const token = bear_token.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded); //{ id: 27, username: 'peter', iat: 1672169295, exp: 1674761295 }
    req.user = {
      id: decoded.id,
      username: decoded.username,
    };
    next();
  } catch (error) {
    throw new UnauthenticatedError("unauthorized");
  }
};

module.exports = authMiddleware;
