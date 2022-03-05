const router = require("express").Router()
const {auth} = require("../controllers");
const {user} = require("../controllers")

router.post("/register", user.create);
router.post("/login", auth.login)

module.exports= router
