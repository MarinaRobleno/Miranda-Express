const bookings = require('./json/booking');
const rooms = require('./json/rooms');
const {connection} = require('./db');
var mysql = require('mysql')

connection.connect()

connection.query('SELECT * FROM rooms', function (err, rows, fields) {
    if (err) throw err
  
    console.log('The solution is: ', rows[0].solution)
  })
  
  connection.end()