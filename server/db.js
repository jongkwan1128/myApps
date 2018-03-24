/**
 * Created by 김종관 on 2018-03-13.
 */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myApps', function () {
	console.log('mongodb connected');
});

module.exports = mongoose;