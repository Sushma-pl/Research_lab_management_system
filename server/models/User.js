const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, unique: true },
  password: { type: String },
});

const User = mongoose.model("User", UserSchema);
User.createIndexes()
module.exports = User
