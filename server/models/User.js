const mongoose = require("mongoose");
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
   //email as username
   email: {
       type: String,
       required: true,
       unique: true,
   },
   password: {
       type: String, 
       required: true,
       minLength: 5, 
       // password will not show up on a query search
       select: false
   },
   bio: {type: String}, //required?
   age: {type: Number},
   hobbies : {type: String},
   pronouns: {type: String},
   zodiacSign: {type: String, required: true},
   horoscopeApi: {type: String}, //type depends on what API we choose
   posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
   comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});
const User = mongoose.model("User", userSchema);

module.exports = User;