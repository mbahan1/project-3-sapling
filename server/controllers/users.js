const db = require("../models")

// Index
const index = (req, res) => {
    db.User.find()
        .exec((err, allUsers) => {
            if (err) return res.status(400).json({
                message: "Failure",
                error: err
            })
            return res.status(200).json({
                message: "Success",
                data: allUsers
            })
        })
}

// Show
const show = async (req, res) => {

    try {
        const foundUser = await db.User.findById(req.params.id)
        return res.status(200).json({
            message: "Success",
            data: foundUser
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        })
    }
}

// Create
const create = async (req, res) => {

	const user = new db.User(req.body)
	const createdUser = await user.save();

	try {
		return res.status(201).json({
			message: "Created",
			data: createdUser
		})
	} catch(err) {
		return res.status(400).json({
			message: "Failure",
			error: err,
		})
	}
};

//Update
const update = async (req, res) => {

    try {
        const foundUser = await db.User.findById(req.params.id)
        const updatedUser = await db.User.findByIdAndUpdate(
            {_id : foundUser._id},
            req.body,
            { new: true }
        )
        return res.status(201).json({ 
            message: "SUCCESS!", 
            data: updatedUser})
    } catch(error) {
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        })
    }
}

// Delete
const destroy = (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, deletedUser) =>{
        if (err) 
        return res.status(400).json({
            message: "Failure",
            error: err
        })        
        return res.status(200).json({
            message: "Success",
            data: deletedUser
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