const router = require('express').Router()
const { comments } = require("../controllers")

router.get("/:id/comments", comments.index)
// router.get("/:id", comments.show)
router.post("/:id/comments", comments.create)
router.put("/:id/comments/:commentid", comments.update)
router.delete("/:id/comments/:id", comments.destroy)

module.exports = router;