const fs = require('fs');
const express = require("express");
const { config } = require("./config");
const { name, version } = require("./package.json");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const displayRoutes = require('express-routemap');

app.use(logger("dev"));
app.use(express.json({ limit: config.size }));
app.use(express.urlencoded({ extended: false, limit: config.size }));
app.use(cookieParser());

app.use(
  cors({
    origin: config.cors,
  })
);

app.get("/health", function (req, res, next) {
  res.send({ status: `${name} - ${version} running OK` });
});

fs.readdirSync("routes").forEach((file) => {
  const name = file.replace(".js", "");
  if(config.exclude.files.includes(name)){
    return;
  }
  if (name === "index") {
    app.use(`/`, require(`./routes/${name}`));
  } else {
    app.use(`/${name}`, require(`./routes/${name}`));
  }
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  console.log("err.message >>>>>>>>>>>> ", err.message);
  // render the error page
  res.status(err.status || 500);
  res.send({ error: err.message });
});

app.listen(config.port, () => {
  displayRoutes(app);
  console.log(
    `${name} - ${version} app listening at http://localhost:${config.port}`
  );
});

module.exports = app;
