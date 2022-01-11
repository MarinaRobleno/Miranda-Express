const rooms = require('../../json/rooms')
const { connection } = require('../../db')

const roomsController = {
    index: (req, res, next) => {
        connection.connect(function(err){
            if (err) console.log(err);
            connection.query('SELECT * FROM rooms', function (err, roomsData){
                if (err) console.log(err)
                return res.json(roomsData);
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
            connection.query(`SELECT * FROM rooms WHERE rooms.id = ${parsedId}`, function (err, roomsData){
                if (err) console.log(err)
                return res.json(roomsData);
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

module.exports = roomsController
