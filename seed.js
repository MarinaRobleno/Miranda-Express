const bookings = require("./json/booking");
const rooms = require("./json/rooms");
const { connection } = require("./db");
var mysql = require("mysql");


connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

connection.end();
