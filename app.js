const express = require("express");
const app = express();
require("express-async-errors"); // do not forget! otherwise end up the exception not being caught
require("dotenv").config();
const loginroute = require("./routes/login");
const dashboardroute = require("./routes/dashboard");
const PORT = process.env.PORT || 3000;
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");
app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1", loginroute);
app.use("/api/v1", dashboardroute);
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
