const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
  photo: String,
  date: String,
  customer: String,
  mail: String,
  phone: String,
  subject: String,
  comment: String,
});

const Contact = mongoose.model("Contact", contactSchema);

const contactController = {
  index: async (req, res, next) => {
    try {
      let contacts = await Contact.find({});
      return res.json(contacts);
    } catch (err) {
      console.log(err);
    }
  },
  store: async (req, res, next) => {
    try {
      const newContact = new Contact({
        photo: req.body.photo,
        date: req.body.date,
        customer: req.body.customer,
        mail: req.body.mail,
        phone: req.body.phone,
        subject: req.body.subject,
        comment: req.body.comment,
      });
      await newContact.save();
      return res.json(newContact);
    } catch (err) {
      console.log(err);
    }
  },
  show: async (req, res, next) => {
    try {
      let contact = await Contact.findOne({ _id: req.params.id }).exec();
      res.json(contact);
    } catch (err) {
      console.log(err);
    }
  },
  update: async (req, res, next) => {
    try {
      let contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
      res.send(`Updated contact ID: ${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      let contact = await Contact.findOneAndDelete({ _id: req.params.id });
      res.send(`Deleted contact ID: ${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = contactController;
