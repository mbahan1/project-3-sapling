const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    body: {type: String, required: true},
    date: {type: Date}, 
})

const postSchema = new Schema(
    {
        title: {type: String, required: true},
        body: {type: String, required: true},
        date: {type: Date}, 
        comments: [commentSchema]
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Post", postSchema)
module.exports = mongoose.model("Comment", commentSchema);