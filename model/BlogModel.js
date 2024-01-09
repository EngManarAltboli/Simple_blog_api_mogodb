const mongoose = require('mongoose');
const BlogSchema = require('../schema/Blog');



const BlogModel = mongoose.model("BLogs" , BlogSchema);





module.exports = BlogModel


