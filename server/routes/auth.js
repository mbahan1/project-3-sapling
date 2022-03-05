const router = require("express").Router();
const {auth} = require("../controllers");
const {users} = require("../controllers");

router.post("/register", users.create)
router.post("/login", auth.login);



module.exports = router;