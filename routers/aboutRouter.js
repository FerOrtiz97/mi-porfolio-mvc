const express = require('express');
const router = express.Router();
const indexController = require('../controllers/aboutController.js')

router.get("/" , indexController.about)

module.exports = router;