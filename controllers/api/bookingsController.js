const bookings = require('../../json/booking')
const { connection } = require('../../db')

const bookingsController = {
    index: (req, res, next) => {
        connection.connect(function(err){
            if (err) console.log(err);
            connection.query('SELECT * FROM bookings', function (err, bookingData){
                if (err) console.log(err)
                return res.json(bookingData);
            })
        })
    },
    store: (req, res, next) => {
        res.send('Stored data')
    },
    show: (req, res, next) => {
        connection.connect(function(err){
            if (err) console.log(err);
            const parsedId = parseInt(req.params.id);
            connection.query(`SELECT * FROM bookings INNER JOIN rooms ON bookings.roomID = rooms.id WHERE bookings.id = ${parsedId}`, function (err, bookingsData){
                if (err) console.log(err)
                return res.json(bookingsData);
            })
        })
    },
    update: (req, res, next) => {
        res.send('Update data')
    },
    delete: (req, res, next) => {
        res.send('Delete data')
    }
}

module.exports = bookingsController;