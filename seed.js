const bookings = require("./json/booking");
const rooms = require("./json/rooms");
const contacts = require("./json/contact");
const users = require("./json/users");
const { connection } = require("./db");
var mysql = require("mysql2");

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
  };
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
  for (let room of rooms) {
    const toInsert = {
      roomNumber: room.roomNumber,
      roomType: room.roomType,
      amenities: room.amenities,
      price: room.price,
      offer_price: room.offer_price,
      status: room.status,
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
  for (let book of bookings) {
    const toInsert = {
      guest: book.guest,
      orderDate: book.orderDate,
      checkIn: book.checkIn,
      checkOut: book.checkOut,
      special: book.special,
      status: book.status,
    };
    connection.query(
      "INSERT INTO bookings SET?",
      toInsert,
      function (error, results, fields) {
        if (error) throw error;
        // Neat!
      }
    );
  }*/
  for (let room of rooms) {
    for (let photo of room.photo) {
      const toInsert = {
        url: photo,
      };
      connection.query(
        "INSERT INTO roomphotos SET?",
        toInsert,
        function (error, results, fields) {
          if (error) throw error;
          // Neat!
        }
      );
    }
  }
});
