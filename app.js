var express = require('express');
var path = require('path');
const serverless = require('serverless-http');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 8080;

var router = express.Router();

router.get('/', function (request, response) {
  response.render('home.ejs');
});

router.get('/services', function (request, response) {
  response.render('services.ejs');
});

router.get('/about', function (request, response) {
  response.render('about.ejs');
});

router.get('/news', function (request, response) {
  response.render('news.ejs');
});

router.get('/faq', function (request, response) {
  response.render('faq.ejs');
});

app.use('/', router);

// app.listen(PORT, function () {
//   console.log('Listening on port ' + PORT);
// });
module.exports.handler = serverless(app);