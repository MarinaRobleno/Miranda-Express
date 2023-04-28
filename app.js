var express = require("express");
var path = require("path");
var logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const settings = require("./settings");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

var app = express();

mongoose.connect(
  "mongodb+srv://admin:admin@mirandacluster.kwsvf.mongodb.net/miranda_db?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferMaxEntries: 0,
  }
);
mongoose.set("useCreateIndex", true);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));



// view engine setup

app.set("view engine", "pug");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS, Content-Type, Authorization"
  );
  // res.header('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.use(passport.initialize());
app.use(passport.session());

app.use(logger("dev"));


require("./auth/auth");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var apiRouter = require("./routes/api");
var loginRouter = require("./routes/login");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter);
app.use("/login", loginRouter);

// catch 404 and forward to error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, resp, next) => {
  resp.status(err.status || 500);
  resp.json({ error: err });
});

module.exports = { app, db };
