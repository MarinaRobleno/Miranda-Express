const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Room } = require("./roomsController");

const bookingSchema = new Schema({
  guest: String,
  orderDate: String,
  checkIn: String,
  checkOut: String,
  special: String,
  bookStatus: String,
  roomNumber: Number,
  roomType: String,
  price: Number,
  offer_price: Number,
  amenities: [String],
  status: String,
  photo: [String]
});

const Booking = mongoose.model("Booking", bookingSchema);

const bookingsController = {
  index: async (req, res, next) => {
    try {
      let bookings = await Booking.find({});
      return res.json(bookings);
    } catch (err) {
      console.log(err);
    }
  },

  store: async (req, res, next) => {
    try {
      let room = await Room.findOne({ roomNumber: req.body.roomNumber }).exec();
      let newBooking = new Booking({
        guest: req.body.guest,
        orderDate: req.body.orderDate,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        special: req.body.special,
        bookStatus: req.body.bookStatus,
        roomNumber: req.body.roomNumber,
        roomType: room.roomType,
        price: room.price,
        offer_price: room.offer_price,
        amenities: room.amenities,
        status: room.status,
        photo: room.photo
      });
      await newBooking.save();
      return res.json(newBooking);
    } catch (err) {
      console.log(err);
    }
  },
  show: async (req, res, next) => {
    try {
      let booking = await Booking.findOne({ _id: req.params.id }).exec();
      return res.json(booking);
    } catch (err) {
      console.log(err);
    }
  },
  update: async (req, res, next) => {
    try {
      let booking = await Booking.findByIdAndUpdate(req.params.id, req.body);
      let room = await Room.findOne({ roomNumber: req.body.roomNumber }).exec();
      let updatedBooking = await Booking.findByIdAndUpdate(req.params.id, {
        roomType: room.roomType,
        price: room.price,
        offer_price: room.offer_price,
        amenities: room.amenities,
        status: room.status,
        photo: room.photo
      });
      res.send(`Updated booking ID: ${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      let booking = await Booking.findOneAndDelete({ _id: req.params.id });
      res.send(`Deleted booking ID: ${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = bookingsController;
