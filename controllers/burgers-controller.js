const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

// Landing page route; lists existing state
router.get('/', function(req, res){
	console.log("GET at /");
	burger.selectAll(function(data){
		const hbo = {
			burger: data
		};
		res.render('index', hbo);
	});
});

// Insert new burger on submit
router.post('/api/burgers', function(req, res){
	burger.insertNew('burger_name', req.body.name, function(result){
		res.json({ id: result.insertNew});
	});
});

// Update burger
router.put('/api/burgers/:id', function(req, res){
	burger.updateOne(req.body.id, req.body.eaten, function(result){
		res.status(200).end();
	});
});

module.exports = router;