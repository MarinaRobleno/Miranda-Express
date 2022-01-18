const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
  photo: [String],
  roomNumber: Number,
  roomType: String,
  amenities: [String],
  price: Number,
  offer_price: Number,
  status: String,  
});

const Room = mongoose.model("Room", roomSchema);

const roomsController = {
  index: async (req, res, next) => {
    let rooms = await Room.find({});
    return res.json(rooms);
  },
  store: async (req, res, next) => {
      const newRoom = new Room({
        roomNumber: req.body.roomNumber,
        roomType: req.body.roomType,
        amenities: req.body.amenities,
        price: req.body.price,
        offer_price: req.body.offer_price,
        status: req.body.status,
        photo: req.body.photo
      });
      await newRoom.save();
      return res.json(newRoom);
  },
  show: async (req, res, next) => {
    let room = await Room.findOne({_id: req.params.id}).exec();
    return res.json(room);
  },
  update: async (req, res, next) => {
    let room = await Room.findByIdAndUpdate(req.params.id, req.body);
    return res.json(room);
  },
  delete: async (req, res, next) => {
    let room = await Room.findOneAndDelete({ _id: req.params.id});
    return res.json(room);
  },
};

module.exports = {roomsController, Room};
