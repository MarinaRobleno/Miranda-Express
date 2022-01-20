const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Room } = require("../api/roomsController");
const rooms = require('../../json/rooms')

const webController = 0;

module.exports = { webController };
