const {db} = require('./.env')
var mysql = require('mysql2')

var connection = mysql.createConnection(db)

module.exports = {
    connection
}