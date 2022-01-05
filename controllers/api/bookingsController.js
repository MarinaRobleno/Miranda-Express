const bookingsController = {
    index: (req, res, next) => {
        //return res.json(bookings)
        res.send('Booking index data')
    },
    store: (req, res, next) => {
        res.send('Stored data')
    },
    show: (req, res, next) => {
        res.send('Show data')
    },
    update: (req, res, next) => {
        res.send('Update data')
    },
    delete: (req, res, next) => {
        res.send('Delete data')
    }
}

module.exports = bookingsController;