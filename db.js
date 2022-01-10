const {db} = require('./.env')
var mysql = require('mysql')

var connection = mysql.createConnection(db)

module.exports = {
    connection
}