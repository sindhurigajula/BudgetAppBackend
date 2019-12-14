var express = require('express');
var router = express.Router();
const user_controller = require("../controllers/user.controller.js");

router.get('/create',user_controller.createUser);
router.get('/:userid',user_controller.getUser);


module.exports = router;