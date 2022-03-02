const db = require("../models");

// Index
const index = (req, res) => {
    db.Post.find()
        .exec((err, allPosts) => {
            if (err) return res.status(400).json({
                message: "Failure",
                error: err
            })
            return res.status(200).json({
                message: "Success",
                data: allPosts
            })
        })
}

// Show
const show = (req, res) => {
    db.Post.findById(req.params.id)
        .populate("user")
        .exec((err, foundPost) => {
            if (err) return res.status(400).json({
            message: "Failure",
            error: err
        })
        return res.status(200).json({
            message: "Success",
            data: foundPost
        })
    })
}


// Create
const create = (req, res) => {
    db.Post.create(req.body, (err, createdPost) => {
        if (err) return res.status(400).json({
            message: "Failure",
            error: err 
        });
        // ref User
        db.User.findById(createdPost.user)
            .exec((err, foundUser) => {
                if (err) return res.status(400).json({
                    message: "Failure",
                    error: err
                })
                foundUser.posts.push(createdPost)
                foundUser.save()
            })
            console.log(createdPost, "Created Post");
            return res.status(201).json({
                message: "Post Created",
                data: createdPost
            })
    })
}

// Update
const update = (req, res) => {
    db.Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedPost) => {
            if (err) 
            return res.status(400).json({
            message: "Failure",
            error: err
            })
            console.log(updatedPost, "Updated Post")
            return res.status(202).json({
                message: "Post Updated",
                data: updatedPost,
            });
        }
    );
}

// Destroy
const destroy = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if (err) return res.status(400).json({
            message: "Failure",
            error :err
        })
        // ref User (delete post from posts array in ref User)
        if (deletedPost.user) {
            db.User.findById(deletedPost.user, (err, foundUser) => {
                foundUser.posts.remove(deletedPost)
                foundUser.save()
            })
        }
        console.log(deletedPost , "Deleted Post");
        return res.status(200).json({
            message: "Post Deleted",
            data: deletedPost
        })
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}