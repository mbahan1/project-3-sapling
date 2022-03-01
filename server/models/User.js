const mongoose = require("mongoose");
const Post = require("./Post");
const Schema = mongoose.Schema;


const userSchema = new Schema({
   firstName: {
       type: String,
       required: true,
       unique: true,
   },
   lastName: {
       type: String,
       required: true,
       unique: true,
   },
   //email as username?
   email: {
       type: String,
       required: true,
       unique: true,
   },
   password: {
       type: String, 
       required: true,
       //specifies default path selection behavior
       select: false
   },
   //google oauth
   googleId : {type: String},
   bio: {type: String}, //required?
   age: {type: Number},
   pronouns: {type: String},
   zodiacSign: {type: String, required: true},
   horoscopeApi: {type: String}, //type depends on what API we choose
   posts: [Post],
   comments: [Comment],
});
const User = mongoose.model("User", userSchema);

module.exports = User;