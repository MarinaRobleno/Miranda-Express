var express = require("express");
var router = express.Router();
const { Room } = require("../controllers/api/roomsController");

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
    const page = req.query.page || 1;
    const options = {
      page: parseInt(page, 10) || 1,
      limit: 9,
    };
    let rooms = await Room.paginate({}, {page: page, limit: 9}).then(
      (results, err) => {
        if (!err) {
          return res.render("room-list", { rooms: results.docs, page_count: results.totalPages, current_page: page });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});

router.get("/room-offers", async (req, res) => {
  try {
    let rooms = await Room.find({});
    return res.render("room-offers", { rooms: rooms });
  } catch (err) {
    console.log(err);
  }
});

router.get("/single-room/:id", async (req, res) => {
  try {
    let room = await Room.findOne({ _id: req.params.id }).exec();
    res.render("single-room", { room: room });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
