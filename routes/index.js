var express = require("express");
var router = express.Router();
//const rooms = require("../json/rooms");
const { db } = require("../app");
const { roomsController, Room } = require("../controllers/api/roomsController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/about-us", (req, res) => {
  res.render("about-us");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/room-list", async (req, res) => {
  try {
    let rooms = await Room.find({});
    return res.render("room-list", {rooms: rooms});
  } catch (err) {
    console.log(err);
  }  
});

router.get("/room-offers", (req, res) => {
  res.render("room-offers", { rooms: rooms });
});

router.get("/single-room", (req, res) => {
  res.render("single-room");
});

module.exports = router;
