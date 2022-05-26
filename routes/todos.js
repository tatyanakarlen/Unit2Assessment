var express = require('express');
var router = express.Router();

let todosCtrl = require('../controllers/todosCtrl.js')

router.get('/', todosCtrl.index)
router.post('/', todosCtrl.create)


module.exports = router;