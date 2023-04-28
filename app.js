require("dotenv").config();
var express = require("express");
var path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const settings = require("./settings");
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT || "3000";

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

require("./auth/auth");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var apiRouter = require("./routes/api");
var loginRouter = require("./routes/login");

var app = express();

// view engine setup


app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS, Content-Type, Authorization'
  );
  // res.header('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter);
app.use("/login", loginRouter);

// catch 404 and forward to error handler
app.use((err, req, resp, next) => {
  resp.status(err.status || 500);
  resp.json({ error: err });
});

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = { app, db };
