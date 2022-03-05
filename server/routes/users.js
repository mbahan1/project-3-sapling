const router = require('express').Router();
const { users } = require("../controllers");
// const authRequired = require("../middleware/auth.required");

router.get("/", users.index)
router.get("/profile", users.show)
router.put("/:id", users.update)
router.delete("/:id", users.destroy)

module.exports = router;