/**
 * Created by 김종관 on 2018-03-13.
 */
let db = require('../db');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	name: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
	}
});

//authenticate input against database
UserSchema.statics.authenticate = function (email, password, callback) {
	User.findOne({ email: email })
		.exec(function (err, user) {
			if (err) {
				return callback(err)
			} else if (!user) {
				var err = new Error('User not found.');
				err.status = 401;
				return callback(err);
			}
			bcrypt.compare(password, user.password, function (err, result) {
				if (result === true) {
					return callback(null, user);
				} else {
					return callback();
				}
			})
		});
};

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
	var user = this;
	bcrypt.hash(user.password, 10, function (err, hash) {
		if (err) {
			return next(err);
		}
		user.password = hash;
		next();
	})
});


let User = db.model('User', UserSchema);
module.exports = User;
