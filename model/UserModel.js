const mongoose = require('mongoose');
const UserSchema = require('../schema/User');



const UserModel = mongoose.model("Users" , UserSchema);





module.exports = UserModel


