/**
 * Created by 김종관 on 2018-03-12.
 */
const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());

// board db
app.use('/api/board', require('./server/controllers/boardController'));

app.use('/', require('./server/static'));

app.listen(4000, function () {
  console.log('Server On Port 4000');
});
