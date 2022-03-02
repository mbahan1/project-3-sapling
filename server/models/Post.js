const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    body: {type: String, required: true},
    date: {type: Date}, 
    user: { type: Schema.Types.ObjectId, ref: "User" }
})

const postSchema = new Schema(
    {
        title: {type: String, required: true},
        body: {type: String, required: true},
        date: {type: Date}, 
        comments: [commentSchema],
        user: { type: Schema.Types.ObjectId, ref: "User" },
        kudos: { type: Number, default: 0}
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Post", postSchema)