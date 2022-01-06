const bookings = require('../../json/booking')

const bookingsController = {
    index: (req, res, next) => {
        return res.json(bookings)
        //res.send('Booking index data')
    },
    store: (req, res, next) => {
        res.send('Stored data')
    },
    show: (req, res, next) => {
        return res.json(bookings[req.params.id-1])
    },
    update: (req, res, next) => {
        res.send('Update data')
    },
    delete: (req, res, next) => {
        res.send('Delete data')
    }
}

module.exports = bookingsController;