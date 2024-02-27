const mongoose = require('mongoose');
const plm = require("passport-local-mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/task");
const userSchema = mongoose.Schema({
username:String,
name:String,
password:String,
Email:String,

  

});

userSchema.plugin(plm);
 
module.exports =mongoose.model("users", userSchema);