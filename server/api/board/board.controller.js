/**
 * Created by 김종관 on 2018-03-13.
 */
let boardModel = require('../../models/board');
let router = require('express').Router();

router.get('/', function(req, res, next){
	boardModel.find()
		.sort('-date')
		.exec(function(err, posts){
			if(err){ return next(err) }
			res.json(posts);
		})
});

router.post('/', function(req, res, next){
	let board = new boardModel({
		username: req.body.username,
		body: req.body.body
	});

	board.save(function(err, board){
		if(err){ return next(err) }
		res.json(201, board);
	})
});

module.exports = router;