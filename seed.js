const bookings = require("./json/booking");
const rooms = require("./json/rooms");
const { connection } = require("./db");
var mysql = require("mysql2");

connection.connect(function (err) {
  if (err) throw err;
  for (let room of rooms) {
    const toInsert = {
      //photo: room.photo,
      roomNumber: room.roomNumber,
      roomType: room.roomType,
      amenities: room.amenities,
      price: room.price,
      offer_price: room.offer_price,
      //status: room.status,
    };
    connection.query(
      "INSERT INTO rooms SET?",
      toInsert,
      function (error, results, fields) {
        if (error) throw error;
        // Neat!
      }
    );
  }
});

