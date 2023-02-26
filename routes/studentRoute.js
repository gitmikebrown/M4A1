
const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');


router.get('/', studentController.getData );
router.post('/', studentController.postData);
router.put('/', studentController.putData);
router.delete('/', studentController.deleteData);

module.exports = router; 