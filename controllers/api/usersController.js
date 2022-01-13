const { connectdb } = require("../../db");
const Joi = require("joi");
var mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");

const usersSchema = Joi.object({
  photo: Joi.string().required(),
  name: Joi.string().required(),
  mail: Joi.string().required(),
  job: Joi.string().required(),
  phone: Joi.string().required(),
  status: Joi.string().required(),
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
  hash: Joi.string().required(),
});

const usersController = {
  index: async (req, res, next) => {
    const connection = await connectdb();
    const [usersResults, usersFields] = await connection.execute(
      "SELECT * FROM users"
    );
    return res.json(usersResults);
  },
  store: async (req, res, next) => {
    const connection = await connectdb();
    const hash = await bcrypt.hash(req.body.password, 10);
    const reqStructure = {
      photo: req.body.photo,
      name: req.body.name,
      mail: req.body.mail,
      job: req.body.job,
      phone: req.body.phone,
      status: req.body.status,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      hash: hash,
    };
    const [usersResults, usersFields] = await connection.execute(
      mysql.format(`INSERT INTO users SET ?`, reqStructure)
    );
    return res.json(usersResults);
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
  update: async (req, res, next) => {
    const connection = await connectdb();
    const parsedId = parseInt(req.params.id);
    const hash = await bcrypt.hash(req.body.password, 10);
    const [usersResults, usersFields] = await connection.execute(
      `UPDATE users SET photo = ?, name = ?, mail = ?, job = ?, phone = ?, status = ?, startDate = ?, endDate = ?, hash = ? WHERE id = ?`,
      [
        req.body.photo,
        req.body.name,
        req.body.mail,
        req.body.job,
        req.body.phone,
        req.body.status,
        req.body.startDate,
        req.body.endDate,
        hash,
        parsedId
      ]
    );
    return res.json(usersResults);
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
