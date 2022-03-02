const router = require("express").Router()

router.use("/posts", require("./posts"))
router.use("/users", require("./users"))
router.use("/posts", require("./comments"))

module.exports = router;