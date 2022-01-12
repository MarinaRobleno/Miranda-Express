const {db} = require('./.env')
var mysql = require('mysql2/promise')

var connection = mysql.createConnection(db)
async function connectdb() {
    const connection = await mysql.createConnection(db);
    return connection;
}

module.exports = {
    connection,
    connectdb
}