const { connectdb } = require("../../db");
const Joi = require("joi");
var mysql = require("mysql2/promise");

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
  index: async (req, res, next) => {
    const connection = await connectdb();
    const [usersResults, usersFields] = await connection.execute(
      "SELECT * FROM users"
    );
    return res.json(usersResults);
  },
  store: (req, res, next) => {
    res.send("Stored data");
  },
  show: async (req, res, next) => {
    const connection = await connectdb();
    const parsedId = parseInt(req.params.id);
    const [usersResults, usersFields] = await connection.execute(
      `SELECT * FROM users WHERE id = ?`,
      [parsedId]
    );
    const user = usersResults[0];
    return res.json(user);
  },
  update: (req, res, next) => {
    res.send("Update data");
  },
  delete: async (req, res, next) => {
    const connection = await connectdb();
    const parsedId = parseInt(req.params.id);
    const [usersResults, usersFields] = await connection.execute(
      `DELETE FROM users WHERE id = ?`,
      [parsedId]
    );
    return res.json(usersResults);
  },
};

module.exports = usersController;
