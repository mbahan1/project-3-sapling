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
        const createdComment = foundPost.comments.create(req.body)
        foundPost.comments.push(createdComment)
        foundPost.save((err)=> {
            if (err) return res.status(400).json({
                message: "Failure",
                error: err
            })
        })
        console.log(createdComment, "Created Comment")
        return res.status(201).json({
            message: "Created",
            data: createdComment
        })
    })
}

//Update

// not working, need to be fixed
const update =  (req, res) => {
    // db.Post.findOneAndUpdate(
    //     { "comments._id" : req.params.comment_id},
    //     { "comments.$" : req.body},
    //     { new: true },
    //     (err, updatedPost) => {
    //         if (err) return res.status(400).json({
    //             message: "Failure",
    //             error: err
    //         })
    //         return res.status(200).json({
    //             message: "Success",
    //             data: updatedPost,
    //         })
    //     }
    // )
}

//Delete
const destroy = (req, res) => {
    db.Post.findOne({"comments._id" : req.params.id}, (err, foundPost) => {
        if (err) return res.status(400).json({
            message: "Failure",
            error: err
        })
        const deletedComment = foundPost.comments.id(req.params.id)
        foundPost.comments.remove(deletedComment);
        foundPost.save((err) => {
            if (err) return res.status(400).json({
                message: "Failure",
                error: err
            })
        })
        return res.status(200).json({
            message: "Success",
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