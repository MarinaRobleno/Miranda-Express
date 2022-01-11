const { connection } = require('../../db')
const users = require('../../json/users')

const usersController = {
    index: (req, res, next) => {
        connection.connect(function(err){
            if (err) console.log(err);
            connection.query('SELECT * FROM users', function (err, usersData){
                if (err) console.log(err)
                return res.json(usersData);
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
            connection.query(`SELECT * FROM users WHERE users.id = ${parsedId}`, function (err, usersData){
                if (err) console.log(err)
                return res.json(usersData);
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

module.exports = usersController;