const contact = require('../../json/contact')
const { connection } = require('../../db')

const contactController = {
    index: (req, res, next) => {
        connection.connect(function(err){
            if (err) console.log(err);
            connection.query('SELECT * FROM contact', function (err, contactData){
                if (err) console.log(err)
                return res.json(contactData);
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
            connection.query(`SELECT * FROM contact WHERE contact.id = ${parsedId}`, function (err, contactData){
                if (err) console.log(err)
                return res.json(contactData);
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

module.exports = contactController;