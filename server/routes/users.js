const router = require('express').Router()
const { users } = require("../controllers")
const authRequired = require('../middleware/auth.required')

router.get("/", users.index)
router.get("/:id", authRequired, users.show)
router.post("/", users.create)
router.put("/:id", users.update)
router.delete("/:id", users.destroy)

module.exports = router;