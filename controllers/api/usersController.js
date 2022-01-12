const { connection } = require('../../db')
const Joi = require('joi');

const usersSchema = Joi.object({
    photo: Joi.string().required(),
    name: Joi.string().required(),
    mail: Joi.string().required(),
    job: Joi.string().required(),
    phone: Joi.string().required(),
    status: Joi.string().required(),
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
});

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
        connection.connect(function(err){
            if (err) console.log(err);
            const parsedId = parseInt(req.params.id);
            connection.query(`DELETE FROM users WHERE users.id = ${parsedId}`, function (err, usersData){
                if (err) console.log(err)
                console.log(`User id ${parsedId} deleted`)
                return res.json(usersData);
            })
        })
    }
}

module.exports = usersController;