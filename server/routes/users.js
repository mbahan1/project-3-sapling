const router = require('express').Router()
const { users } = require("../controllers")

router.get("/", users.index)
router.get("/:id", users.show)
router.post("/", users.create)
router.put("/:id", users.update)
router.delete("/:id", users.destroy)

module.exports = router;