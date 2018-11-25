var express = require('express');
var burger = require('../models/burger');

var router = express.Router();

// routes
router.get('/', function(req, res) {
    console.log("GET at /");
});

module.exports = router;