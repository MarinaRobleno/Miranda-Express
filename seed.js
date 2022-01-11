const bookings = require("./json/booking");
const rooms = require("./json/rooms");
const contacts = require("./json/contact");
const users = require("./json/users");
const { connection } = require("./db");
var mysql = require("mysql2");

/*connection.connect(function (err) {
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
});*/

connection.connect(function (err) {
  if (err) throw err;
  /*for (let contact of contacts) {
    const toInsert = {
      photo: contact.photo,
      date: contact.date,
      customer: contact.customer,
      mail: contact.mail,
      phone: contact.phone,
      subject: contact.subject,
      comment: contact.comment,
    };
    connection.query(
      "INSERT INTO contact SET?",
      toInsert,
      function (error, results, fields) {
        if (error) throw error;
        // Neat!
      }
    );
  };*/
  for (let user of users) {
    const toInsert = {
      photo: user.photo,
      name: user.name,
      job: user.job,
      mail: user.mail,
      phone: user.phone,
      status: user.status,
      startDate: user.startDate,
      endDate: user.endDate
    };
    connection.query(
      "INSERT INTO users SET?",
      toInsert,
      function (error, results, fields) {
        if (error) throw error;
        // Neat!
      }
    );
  };

});

