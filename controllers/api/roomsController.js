const { connection, connectdb } = require("../../db");
const Joi = require("joi");
var mysql = require('mysql2/promise')

const roomSchema = Joi.object({
  roomNumber: Joi.number().required(),
  roomType: Joi.string().required(),
  amenities: Joi.string(),
  price: Joi.number().required(),
  offer_price: Joi.number(),
  status: Joi.string().required(),
});

const roomsController = {
  index: async (req, res, next) => {
    const connection = await connectdb();
    const [roomResults, roomFields] = await connection.execute(
      `SELECT * FROM rooms`
    );
    const [photoResults, photoFields] = await connection.execute(
      `SELECT * FROM roomphotos`
    );
    for (let j = 0; j < roomResults.length; j++) {
      roomResults[j].photo = [];
      let currentId = roomResults[j].insertId;
      for (let k = 0; k < photoResults.length; k++) {
        if (photoResults[k].roomId === currentId) {
          roomResults[j].photo.push(photoResults[k].url);
        }
      }
    }
    return res.json(roomResults);
  },
  store: async (req, res, next) => {
    const connection = await connectdb();
    const reqStructure = {
      roomNumber: req.body.roomNumber,
      roomType: req.body.roomType,
      amenities: req.body.amenities,
      price: req.body.price,
      offer_price: req.body.offer_price,
      status: req.body.status,
    }
    const [roomResults, roomFields] = await connection.execute(
      mysql.format(`INSERT INTO rooms SET ?`, reqStructure)
      //LOOP insert id
    );
    return res.json(roomResults);
  },
  show: async (req, res, next) => {
    const connection = await connectdb();
    const parsedId = parseInt(req.params.id);
    const [roomResults, roomFields] = await connection.execute(
      `SELECT * FROM rooms WHERE id = ?`,
      [parsedId]
    );
    const room = roomResults[0];
    const [photoResults, photoFields] = await connection.execute(
      `SELECT * FROM roomphotos WHERE roomId = ?`,
      [parsedId]
    );
    room.photo = [];
    for (let i = 0; i < photoResults.length; i++) {
      room.photo.push(photoResults[i].url);
    }
    return res.json(room);
  },
  update: (req, res, next) => {
    res.send("Update data");
  },
  delete: async (req, res, next) => {
    const connection = await connectdb();
    const parsedId = parseInt(req.params.id);
    const [roomResults, roomFields] = await connection.execute(
      `DELETE FROM rooms WHERE rooms.id = ?`,
      [parsedId]
    );
    const [photoResults, photoFields] = await connection.execute(
      `DELETE FROM roomphotos WHERE roomId = ?`,
      [parsedId]
    );
    return res.json(roomResults);
  },
};

module.exports = roomsController;
