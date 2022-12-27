const express = require("express");
const loginRoute = express.Router();
const login = require("../controllers/login");

loginRoute.route("/login").post(login);
module.exports = loginRoute;
