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
  /*roomType: String,
  price: Number,
  offer_price: Number,
  amenities: [String],*/
});

const Booking = mongoose.model("Booking", bookingSchema);

const bookingsController = {
  index: async (req, res, next) => {
    /*let bookings = await Booking.find({});
    return res.json(bookings);*/
    Booking.aggregate([
      {
        $lookup: {
          from: "rooms",
          localField: "roomNumber",
          foreignField: "roomNumber",
          as: "room",
        },
      },
      {
        $unwind: "$room",
      },
    ])
    .then((result)=>{
      return res.json(result)
    })
    .catch((error) => {
      console.log(error)
    });
  },
  
  store: async (req, res, next) => {
    /*let room = json(
      await Room.findOne({ roomNumber: req.params.roomNumber }).exec()
    );
    console.log(room);*/
    let newBooking = new Booking({
      guest: req.body.guest,
      orderDate: req.body.orderDate,
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      special: req.body.special,
      bookStatus: req.body.bookStatus,
      roomNumber: req.body.roomNumber,
      /*roomType: room.roomType,
      price: room.price,
      offer_price: room.offer_price,
      amenities: room.amenities,*/
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
    let booking = await Booking.findOneAndDelete({ _id: req.params.id });
    return res.json(booking);
  },
};

module.exports = bookingsController;
