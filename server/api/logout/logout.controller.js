/**
 * Created by 김종관 on 2018-03-13.
 */
var userModel = require('../../models/user');
var router = require('express').Router();

// GET for logout logout
router.get('/', function (req, res, next) {
	if (req.session) {
		// delete session object
		req.session.destroy(function (err) {
			if (err) {
				return next(err);
			} else {
				return res.redirect('/');
			}
		});
	}
});

module.exports = router;