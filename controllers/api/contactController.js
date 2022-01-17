const mongoose = require('mongoose');
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
    let contacts = await Contact.find({});
    return res.json(contacts);
  },
  store: async (req, res, next) => {
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
  },
  show: async (req, res, next) => {
    let contact = await Contact.findOne({_id: req.params.id}).exec();
    res.json(contact);
  },
  update: async (req, res, next) => {
    let contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
    return res.json(contact);
  },
  delete: async (req, res, next) => {
    let contact = await Contact.findOneAndDelete({ _id: req.params.id});
    return res.json(contact);
  }
};

module.exports = contactController;
