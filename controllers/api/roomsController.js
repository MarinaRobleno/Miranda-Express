const { connection, connectdb } = require("../../db");
const Joi = require("joi");

const roomSchema = Joi.object({
  roomNumber: Joi.number().required(),
  roomType: Joi.string().required(),
  amenities: Joi.string(),
  price: Joi.number().required(),
  offer_price: Joi.number(),
  status: Joi.string().required(),
});

const roomsController = {
  index: (req, res, next) => {
    connection.connect(function (err) {
      if (err) console.log(err);
      connection.query("SELECT * FROM rooms", function (err, roomsData) {
        if (err) console.log(err);
        return res.json(roomsData);
      });
    });
  },
  store: (req, res, next) => {
    connection.connect(function (err) {
      if (err) console.log(err);
      const newRoom = {
        url: [
          "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
          "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
          "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
        ],
        roomNumber: 30,
        roomType: "Single Bed",
        amenities: "Dip - Tapenade",
        price: 58088,
        offer_price: 30479,
        status: "available",
      };
      connection.query(
        `INSERT INTO rooms SET?`,
        {
          roomNumber: req.body.roomNumber,
          roomType: req.body.roomType,
          amenities: req.body.amenities,
          price: req.body.price,
          offer_price: req.body.offer_price,
          status: req.body.status,
        },
        //LOOP insert id
        function (err, roomsData) {
          if (err) console.log(err);
          return res.json(roomsData);
        }
      );
    });
  },
  show: async (req, res, next) => {
    const connection = await connectdb();
    const parsedId = parseInt(req.params.id);
    const [roomResults, roomFields] = await connection.execute(
      `SELECT * FROM rooms WHERE id = ?`,
      [parsedId]
    );
    const room = roomResults[0]
    const [photoResults, photoFields] = await connection.execute(
        `SELECT * FROM roomphotos WHERE roomId = ?`,
        [parsedId]
      );
    room.photo = [];
    for (let i = 0; i<photoResults.length; i++){
        room.photo.push(photoResults[i].url)
    }
    return res.json(room);
  },
  update: (req, res, next) => {
    res.send("Update data");
  },
  delete: (req, res, next) => {
    connection.connect(function (err) {
      if (err) console.log(err);
      const parsedId = parseInt(req.params.id);
      connection.query(
        `DELETE FROM rooms WHERE rooms.id = ${parsedId}`,
        function (err, roomsData) {
          if (err) console.log(err);
          console.log(`Room id ${parsedId} deleted`);
          return res.json(roomsData);
        }
      );
    });
  },
};

module.exports = roomsController;
