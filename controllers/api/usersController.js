const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const usersSchema = new Schema({
  photo: String,
  name: String,
  mail: String,
  job: String,
  phone: String,
  status: String,
  startDate: String,
  endDate: String,
  hash: String,
});

const User = mongoose.model("User", usersSchema);

const usersController = {
  index: async (req, res, next) => {
    await User.find({});
  },
  store: async (req, res, next) => {
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      photo: req.body.photo,
      name: req.body.name,
      mail: req.body.mail,
      job: req.body.job,
      phone: req.body.phone,
      status: req.body.status,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      hash: hash,
    });
    await newUser.save();
    return res.json(newUser);
  },
  show: async (req, res, next) => {
    await User.findOne({_id: req.params.id}).exec();
  },
  update: async (req, res, next) => {
    //
  },
  delete: async (req, res, next) => {
    await User.findOneAndDelete({ _id: req.params.id});
    console.log()
  },
};

module.exports = usersController;
