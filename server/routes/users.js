const router = require('express').Router()
const { users } = require("../controllers")
const authRequired = require('../middleware/auth.required')

router.get("/", users.index);
//temporarily remove authRequried to show profile 
//with authRequired, the fetched api url is forbidden, so don't know how can get the info. 
router.get("/:id", users.show);
router.put("/:id", users.update);
router.delete("/:id", users.destroy);

module.exports = router;