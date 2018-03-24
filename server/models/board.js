/**
 * Created by 김종관 on 2018-03-13.
 */
let db = require('../db');
const mongoose = require('mongoose');

let BoardSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true,
		default: Date.now
	}
});

let Board = db.model('Board', BoardSchema);
module.exports = Board;