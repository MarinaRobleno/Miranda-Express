const { connection, connectdb } = require("../../db");
const Joi = require("joi");
var mysql = require("mysql2/promise");

const bookSchema = Joi.object({
  guest: Joi.string().required(),
  orderDate: Joi.string().required(),
  checkIn: Joi.string().required(),
  checkOut: Joi.string().required(),
  special: Joi.string(),
  bookStatus: Joi.string().required(),
  roomId: Joi.number().required(),
});

const bookingsController = {
  index: async (req, res, next) => {
    const connection = await connectdb();
    const [bookResults, bookFields] = await connection.execute(
      `SELECT * FROM mirandadb.rooms INNER JOIN mirandadb.bookings ON bookings.roomID = rooms.id`
    );
    const [photoResults, photoFields] = await connection.execute(
      `SELECT * FROM roomphotos`
    );
    for (let j = 0; j < bookResults.length; j++) {
      bookResults[j].photo = [];
      let currentId = bookResults[j].id;
      for (let k = 0; k < photoResults.length; k++) {
        if (photoResults[k].roomId === currentId) {
          bookResults[j].photo.push(photoResults[k].url);
        }
      }
    }
    return res.json(bookResults);
  },
  store: async (req, res, next) => {
    const connection = await connectdb();
    const [bookResults, bookFields] = await connection.execute(
      mysql.format(`INSERT INTO bookings SET ?`, {
        guest: req.body.guest,
        orderDate: req.body.orderDate,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        special: req.body.special,
        bookStatus: req.body.bookStatus,
        roomId: req.body.roomId,
      })
    );
    return res.json(bookResults);
  },
  show: async (req, res, next) => {
    const connection = await connectdb();
    const parsedId = parseInt(req.params.id);
    const [bookResults, bookFields] = await connection.execute(
      `SELECT * FROM bookings INNER JOIN rooms ON bookings.roomID = rooms.id WHERE bookings.id = ${parsedId}`
    );
    const book = bookResults[0];
    const [photoResults, photoFields] = await connection.execute(
      `SELECT * FROM roomphotos WHERE roomId = ?`,
      [parsedId]
    );
    if (book) {
      book.photo = [];
      for (let i = 0; i < photoResults.length; i++) {
        book.photo.push(photoResults[i].url);
      }
    }

    return res.json(book);
  },
  update: async (req, res, next) => {
    const connection = await connectdb();
    const parsedId = parseInt(req.params.id);
    const [bookResults, bookFields] = await connection.execute(
      `UPDATE bookings SET guest = ?, orderDate = ?, checkIn = ?, checkOut = ?, special = ?, bookStatus = ?, roomId = ? WHERE id = ?`,
      [
        req.body.guest,
        req.body.orderDate,
        req.body.checkIn,
        req.body.checkOut,
        req.body.special,
        req.body.bookStatus,
        req.body.roomId,
        parsedId,
      ]
    );
    return res.json(bookResults);
  },
  delete: async (req, res, next) => {
    const connection = await connectdb();
    const parsedId = parseInt(req.params.id);
    const [bookResults, bookFields] = await connection.execute(
      `DELETE FROM bookings WHERE bookings.id = ?`,
      [parsedId]
    );
    return res.json(bookResults);
  },
};

module.exports = bookingsController;
