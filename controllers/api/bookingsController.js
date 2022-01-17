const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingSchema = new Schema({
  guest: String,
  orderDate: String,
  checkIn: String,
  checkOut: String,
  special: String,
  bookStatus: String,
  roomId: Number,
});

const Booking = mongoose.model("Booking", bookingSchema);

const bookingsController = {
  index: async (req, res, next) => {
    let bookings = await Booking.find({});
    return res.json(bookings);
  },
  store: async (req, res, next) => {
    let newBooking = new Booking({
      guest: req.body.guest,
      orderDate: req.body.orderDate,
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      special: req.body.special,
      bookStatus: req.body.bookStatus,
      roomId: req.body.roomId,
    });
    await newBooking.save();
    return res.json(newBooking);
  },
  show: async (req, res, next) => {
    let booking = await Booking.findOne({ _id: req.params.id }).exec();
    return res.json(booking);
  },
  update: async (req, res, next) => {
    let booking = await Booking.findByIdAndUpdate(req.params.id, req.body);
    return res.json(booking);
  },
  delete: async (req, res, next) => {
    let booking = await Booking.findOneAndDelete({ _id: req.params.id});
    return res.json(booking);
  },
};

module.exports = bookingsController;
