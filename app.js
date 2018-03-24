/**
 * Created by 김종관 on 2018-03-12.
 */
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const mongoStorage = require('connect-mongo')(session);


let app = express();

let db = mongoose.connection;

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new mongoStorage({
    mongooseConnection: db
  })
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.engine('html', require('ejs').renderFile);
// set static files
app.use('/', require('./server/static'));

// login
app.use('/login', require('./server/api/login/login.controller'));
// logout
app.use('/logout', require('./server/api/logout/logout.controller'));
// user
app.use('/user', require('./server/api/user/user.controller'));
// board
app.use('/board', require('./server/api/board/board.controller'));





// app.use(express.methodOverride());

// app.use(function (req, res, next) {
//   throw new Error(req.url + ' not found.');
// });
// app.use(function (err, req, res, next) {
//   console.log(err);
//   res.send(err.message);
// });

app.use(logger('dev'));

app.listen(4000, function () {
  console.log('Server On Port 4000');
});
