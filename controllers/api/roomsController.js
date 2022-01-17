const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
  photo: [String],
  roomNumber: Number,
  roomType: String,
  amenities: String,
  price: Number,
  offer_price: Number,
  status: String,  
});

const Room = mongoose.model("Room", roomSchema);

const roomsController = {
  index: async (req, res, next) => {
    await Room.find({});
    return res;
  },
  store: async (req, res, next) => {
      const newRoom = new Room({
        roomNumber: req.body.roomNumber,
        roomType: req.body.roomType,
        amenities: req.body.amenities,
        price: req.body.price,
        offer_price: req.body.offer_price,
        status: req.body.status,
      });
      await newRoom.save();
      return res.json(newRoom);
  },
  show: async (req, res, next) => {
    await Room.findOne({_id: req.params.id}).exec();
  },
  update: async (req, res, next) => {
    //
  },
  delete: async (req, res, next) => {
    await Room.findOneAndDelete({ _id: req.params.id});
    console.log('Deleted')
  },
};

module.exports = roomsController;
