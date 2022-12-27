const express = require("express");
const dashboardRoute = express.Router();
const dashboard = require("../controllers/dashboard");
const authMiddleware = require("../middleware/auth");

dashboardRoute.route("/dashboard").get(authMiddleware, dashboard);
module.exports = dashboardRoute;
