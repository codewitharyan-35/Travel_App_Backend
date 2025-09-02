const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  UserName: { type: String, required: true },
  Number: { type: Number, required: true, uniquie: true },
  Email: { type: String, required: true, uniquie: true },
  Password: { type: String, required: true },
},{
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;