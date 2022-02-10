var express = require("express");
var router = express.Router();
const { Room } = require("../controllers/api/roomsController");
const { Contact } = require("../controllers/api/contactController");
const { Booking } = require("../controllers/api/bookingsController");
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '-' + dd + '-' + yyyy;

function convertDateFormat(string) {
  var info = string.split("-");
  return info[1] + "-" + info[2] + "-" + info[0];
}

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "home" });
});

router.get("/about-us", (req, res) => {
  res.render("about-us", { title: "about" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "contact" });
});

router.post("/contact", async (req, res) => {
  try {
    const newContact = new Contact({
      customer: req.body.customer,
      mail: req.body.mail,
      phone: req.body.phone,
      subject: req.body.subject,
      comment: req.body.comment,
    });
    await newContact.save();
    res.render("success", {title: "success"});
  } catch (err) {
    console.log(err);
  }
})

router.get("/room-list", async (req, res) => {
  try {
    const page = req.query.page || 1;
    let rooms = await Room.paginate({}, { page: page, limit: 9 }).then(
      (results, err) => {
        if (!err) {
          return res.render("room-list", {
            title: "room-list",
            rooms: results.docs,
            page_count: results.totalPages,
            current_page: page,
          });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});

router.get("/room-offers", async (req, res) => {
  try {
    const page = req.query.page || 1;
    let rooms = await Room.paginate({}, { page: page, limit: 9 }).then(
      (results, err) => {
        if (!err) {
          return res.render("room-offers", {
            title: "room-offers",
            rooms: results.docs,
            page_count: results.totalPages,
            current_page: page,
          });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});

router.get("/single-room/:id", async (req, res) => {
  try {
    selectedRoomId = req.params.id;
    let rooms = await Room.find({});
    let room = await Room.findOne({ _id: req.params.id }).exec();
    res.render("single-room", { room: room, rooms: rooms });
  } catch (err) {
    console.log(err);
  }
});

router.post("/single-room/:id", async (req, res) => {
  try {
    let room = await Room.findOne({ _id: req.params.id }).exec();
    let newBooking = new Booking({
      guest: req.body.guest,
      orderDate: today,
      checkIn: convertDateFormat(req.body.checkIn),
      checkOut: convertDateFormat(req.body.checkOut),
      special: req.body.special,
      bookStatus: 'in',
      roomNumber: room.roomNumber,
      roomType: room.roomType,
      price: room.price,
      offer_price: room.offer_price,
      amenities: room.amenities,
      status: room.status,
      photo: room.photo,
      description: room.description
    });
    await newBooking.save();
    res.render("booked", {title: "booked"});
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
