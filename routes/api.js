const express = require("express");
const router = express.Router();
const roomsController = require('../controllers/api/roomsController');
const bookingsController = require('../controllers/api/bookingsController');
const usersController = require('../controllers/api/usersController');
const contactController = require('../controllers/api/contactController');
const dashboardController = require('../controllers/api/dashboardController');

router.get(
    '/',
    (req, res, next) => {
      res.json({
        message: 'Private API route',
        user: req.user,
        token: req.query.secret_token
      })
    }
  );  

//Dashboard
router.route('/dashboard')
    .get(dashboardController.index)
//Rooms

router.route("/rooms")
    .get(roomsController.index)
    .post(roomsController.store)

router.route("/rooms/:id")
    .get(roomsController.show)
    .patch(roomsController.update)
    .delete(roomsController.delete);
    
    //router.route("/rooms/new-room").get.patch.delete;

//Bookings
router.route("/bookings")
    .get(bookingsController.index)
    .post(bookingsController.store)
router.route("/bookings/:id")    
    .get(bookingsController.show)
    .patch(bookingsController.update)
    .delete(bookingsController.delete);

//Contact
router.route("/contact")
    .get(contactController.index)
    .post(contactController.store)
router.route("/contact/:id")    
    .get(contactController.show)
    .patch(contactController.update)
    .delete(contactController.delete);

//Users
router.route("/users")
    .get(usersController.index)
    .post(usersController.store)
router.route("/users/:id")    
    .get(usersController.show)
    .patch(usersController.update)
    .delete(usersController.delete);
    
module.exports = router;
