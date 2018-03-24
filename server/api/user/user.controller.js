/**
 * Created by 김종관 on 2018-03-13.
 */
var userModel = require('../../models/user');
var router = require('express').Router();

// GET route for reading data
// router.get('/', function (req, res, next) {
// 	return res.sendFile(path.join(__dirname + '/templateLogReg/index.html'));
// });


//POST route for updating data
router.post('/', function (req, res, next) {
	// confirm that user typed same password twice
	if (req.body.email && req.body.name && req.body.password) {
		let userData = {
			email: req.body.email,
			name: req.body.name,
			password: req.body.password
		};

		userModel.create(userData, function (error, user) {
			if (error) {
				return next(error);
			} else {
				req.session.userId = user._id;
				return res.json(user);
			}
		});
	} else {
		var err = new Error('All fields required.');
		err.status = 400;
		return next(err);
	}
});

// GET route after registering
router.get('/', function (req, res, next) {
	User.findById(req.session.userId)
		.exec(function (error, user) {
			if (error) {
				return res.json(error);
			} else {
				if (user === null) {
					var err = new Error('Not authorized! Go back!');
					err.status = 400;
					return res.json(err);
				} else {
					return res.json(user)
				}
			}
		});
});
//
// // GET for logout logout
// router.get('/logout', function (req, res, next) {
// 	if (req.session) {
// 		// delete session object
// 		req.session.destroy(function (err) {
// 			if (err) {
// 				return next(err);
// 			} else {
// 				return res.redirect('/');
// 			}
// 		});
// 	}
// });

module.exports = router;