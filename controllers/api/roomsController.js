const rooms = require('../../json/rooms')

const roomsController = {
    index: (req, res, next) => {
        return res.json(rooms)
        //res.send('Room index data')
    },
    store: (req, res, next) => {
        res.send('Stored data')
    },
    show: (req, res, next) => {
        return res.json(rooms[req.params.id-1])
    },
    update: (req, res, next) => {
        res.send('Update data')
    },
    delete: (req, res, next) => {
        res.send('Delete data')
    }
}

module.exports = roomsController
