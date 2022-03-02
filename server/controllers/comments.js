const db = require("../models");

//Index
const index = (req, res) => {
    db.Post.findById(req.params.id).select("comments")
        .exec((err, foundComments) => {
            if (err) return res.status(400).json({
                message: "Failure",
                error: err
            })
            return res.status(200).json({
                message: "Success",
                data: foundComments
            })
        })
}

//Create
const create = (req, res) => {
    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) return res.status(400).json({
            message: "Failure",
            error: err
        })
        // embedded Comment in Post (add comment to comments array in Post)
        const createdComment = foundPost.comments.create(req.body)
        foundPost.comments.push(createdComment)
        foundPost.save((err)=> {
            if (err) return res.status(400).json({
                message: "Failure",
                error: err
            })
        })
        // ref User (add comment to comments array in ref User)
        db.User.findById(createdComment.user._id, (err, foundUser) => {
            if (err) return res.status(400).json({
                message: "Failure",
                error: err
            })
            foundUser.comments.push(createdComment);
            foundUser.save()
        })
        console.log(createdComment, "Created Comment")
        return res.status(201).json({
            message: "Comment Created",
            data: createdComment
        })
    })
}

//Update
const update =  (req, res) => {
    db.Post.findOneAndUpdate(
        {_id: req.params.id, "comments._id": req.params.commentid},
        { 
            $set: {
            "comments.$.body" : req.body.body}
        },
        {new: true},
        (err, updatedPost) => {
            if (err) return res.status(400).json({
                message: "Failure",
                error: err
            })
            console.log(updatedPost)
            return res.status(200).json({
                message: "Comment Updated",
                data: updatedPost,
            })
        }
    )
}

//Delete
const destroy = (req, res) => {
    db.Post.findOne({"comments._id" : req.params.id}, (err, foundPost) => {
        if (err) return res.status(400).json({
            message: "Failure",
            error: err
        })
        // embedded Comment in Post (delete the comment from Post comments array)
        const deletedComment = foundPost.comments.id(req.params.id)
        foundPost.comments.remove(deletedComment);
        foundPost.save((err) => {
            if (err) return res.status(400).json({
                message: "Failure",
                error: err
            })
        })
        // ref User (delete the comment from comments array in ref User)
        if(deletedComment.user) {
            db.User.findById(deletedComment.user, (err, foundUser) => {
                if (err) return res.status(400).json({
                    message: "Failure",
                    error: err
                })
                foundUser.comments.remove(deletedComment);
                foundUser.save()
            })
        }
        return res.status(200).json({
            message: "Comment Deleted",
            data: deletedComment,
        })
    })
}

module.exports = {
    index,
    create,
    update,
    destroy
}