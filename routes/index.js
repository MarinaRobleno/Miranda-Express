var express = require("express");
var router = express.Router();
const { Room } = require("../controllers/api/roomsController");
const { Contact } = require("../controllers/api/contactController");

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

router.post("/api/contacts", async (req, res) => {
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
    let rooms = await Room.find({});
    let room = await Room.findOne({ _id: req.params.id }).exec();
    res.render("single-room", { room: room, rooms: rooms });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
