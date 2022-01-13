const bookings = require("./json/booking");
const rooms = require("./json/rooms");
const contacts = require("./json/contact");
const users = require("./json/users");
const { connectdb } = require("./db");
var mysql = require("mysql2/promise");

async function insertData() {
  const connection = await connectdb();
  for (let room of rooms) {
    const toInsert = {
      roomNumber: room.roomNumber,
      roomType: room.roomType,
      amenities: room.amenities,
      price: room.price,
      offer_price: room.offer_price,
      status: room.status,
    };
    const [results, fields] = await connection.execute(
      mysql.format("INSERT INTO rooms SET?",
      toInsert)
    );
  };
  for (let book of bookings) {
    const toInsert = {
      guest: book.guest,
      orderDate: book.orderDate,
      checkIn: book.checkIn,
      checkOut: book.checkOut,
      special: book.special,
      bookStatus: book.bookStatus,
      roomId: book.id
    };
    const [results, fields] = await connection.execute(
      mysql.format("INSERT INTO bookings SET?",
      toInsert));
  };
  for (let room of rooms) {
    for (let i = 0; i < room.photo.length; i++) {
      const toInsert = {
        url: room.photo[i],
        roomId: room.roomNumber,
      };
      const [results, fields] = await connection.execute(
        mysql.format("INSERT INTO roomphotos SET?",
        toInsert));
    }
  }
}


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
      bookStatus: book.bookStatus,
    };
    connection.query(
      "INSERT INTO bookings SET?",
      toInsert,
      function (error, results, fields) {
        if (error) throw error;
        // Neat!
      }
    );
  }
  for (let room of rooms) {
    for (let i = 0; i < room.photo.length; i++) {
      const toInsert = {
        url: room.photo[i],
        roomId: room.roomNumber,
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
});*/

insertData();
