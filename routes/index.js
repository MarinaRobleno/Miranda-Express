var express = require('express');
var router = express.Router();
const webController = require('../controllers/webpage/webController')
const rooms = require('../json/rooms')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about-us', (req, res) => {    
  res.render('about-us');
});

router.get('/contact', (req, res) => {    
  res.render('contact');
});

router.get('/room-list', (req, res) => {    
  res.render('room-list', {rooms: rooms});
});

router.get('/room-offers', (req, res) => {    
  res.render('room-offers', {rooms: rooms});
});

router.get('/single-room', (req, res) => {    
  res.render('single-room');
});

module.exports = router;
