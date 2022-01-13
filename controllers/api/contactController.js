const { connectdb } = require("../../db");
var mysql = require("mysql2/promise");

const contactController = {
  index: async (req, res, next) => {
    const connection = await connectdb();
    const [contactResults, contactFields] = await connection.execute(
      "SELECT * FROM contact"
    );
    return res.json(contactResults);
  },
  store: async (req, res, next) => {
    const connection = await connectdb();
    const reqStructure = {
      photo: req.body.photo,
      date: req.body.date,
      customer: req.body.customer,
      mail: req.body.mail,
      phone: req.body.phone,
      subject: req.body.subject,
      comment: req.body.comment,
    };
    const [contactResults, contactFields] = await connection.execute(
      mysql.format(`INSERT INTO contact SET ?`, reqStructure)
    );
    return res.json(contactResults);
  },
  show: async (req, res, next) => {
    const connection = await connectdb();
    const parsedId = parseInt(req.params.id);
    const [contactResults, contactFields] = await connection.execute(
      `SELECT * FROM contact WHERE id = ?`,
      [parsedId]
    );
    const contact = contactResults[0];
    return res.json(contact)
  },
  update: async (req, res, next) => {
    const connection = await connectdb();
    const parsedId = parseInt(req.params.id);
    const [contactResults, contactFields] = await connection.execute(
      `UPDATE contact SET photo = ?, date = ?, customer = ?, mail = ?, phone = ?, subject = ?, comment = ? WHERE id = ?`,
      [
        req.body.photo,
        req.body.date,
        req.body.customer,
        req.body.mail,
        req.body.phone,
        req.body.subject,
        req.body.comment,
        parsedId,
      ]
    );
    return res.json(contactResults);
  },
  delete: async (req, res, next) => {
    const connection = await connectdb();
    const parsedId = parseInt(req.params.id);
    const [contactResults, contactFields] = await connection.execute(
      `DELETE FROM contact WHERE contact.id = ?`,
      [parsedId]
    );
    return res.json(contactResults)
  },
};

module.exports = contactController;
