const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
  photo: [String],
  roomNumber: Number,
  roomType: String,
  amenities: [String],
  price: Number,
  offer_price: Number,
  status: String,
  description: String
});

const Room = mongoose.model("Room", roomSchema);

const roomsController = {
  index: async (req, res, next) => {
    try {
      let rooms = await Room.find({});
      return res.json(rooms);
    } catch (err) {
      console.log(err);
    }
  },
  store: async (req, res, next) => {
    try {
      const newRoom = new Room({
        roomNumber: req.body.roomNumber,
        roomType: req.body.roomType,
        amenities: req.body.amenities,
        price: req.body.price,
        offer_price: req.body.offer_price,
        status: req.body.status,
        photo: req.body.photo,
        description: req.body.description
      });
      await newRoom.save();
      return res.json(newRoom);
    } catch (err) {
      console.log(err);
    }
  },
  show: async (req, res, next) => {
    try {
      let room = await Room.findOne({ _id: req.params.id }).exec();
      return res.json(room);
    } catch (err) {
      console.log(err);
    }
  },
  update: async (req, res, next) => {
    try {
      let room = await Room.findByIdAndUpdate(req.params.id, req.body);
      res.send(`Updated room number ${req.body.roomNumber}. ID: ${req.params.id}`)
    } catch (err) {
      console.log(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      let room = await Room.findOneAndDelete({ _id: req.params.id });
      res.send(`Deleted room number ${req.body.roomNumber}. ID: ${req.params.id}`)
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = { roomsController, Room };
