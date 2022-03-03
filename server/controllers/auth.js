const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const db = require("../models") may need to put what is in database.js in config folder into the models index js
const db = require("../config/database");

const register = async(req, res) => {
    try{
        const foundUser = await db.User.findOne({ email: req.body.email})

        if (foundUser) {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(req.body.password, salt);

            const updatedUser = await db.user.findByIdAndUpdate(
                {_id: foundUser._id},
                {
                   $set: {password: hash} 
                },
                {new: true}
            )
            return res
            .status(201)
            .json({status: 201, message: "SUCESSFUL LOGIN", updatedUser})
        }
        return res.status(400).json({
            status: 400,
            message: "email does not exist, try again"
        })
    } catch (error){
        return res.status(500).json({
            status: 500,
            message:
        })

    }
}








const login = (req, res) => {

}