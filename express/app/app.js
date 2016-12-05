var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var config = require('./config');

/*var routes = require('./routes/index');
var users = require('./routes/users');*/
var authController = require('./controllers/auth-controller');
var apiController = require('./controllers/api-controller');

var app = express();
app.set('env', config.instance);

var mongoDBURI = 'mongodb://localhost/tolaboard';
var mongoDBOptions = {
  db: { native_parser: true },
  server: { poolSize: 5 },
  replset: { rs_name: 'myReplicaSetName' },
  user: config.mongodbUser,
  pass: config.mongodbPW
}
// mongoose.connect(mongoDBURI, mongoDBOptions);

try {
  // mongoose.connect('mongodb://localhost:27017/tolaboard');
  db = mongoose.createConnection('mongodb://localhost/tolaboard');
  } 
  catch(err) {
    console.log('DB connect error... ' + err)
  }


// view engine setup
/*app.set('views', path.join(__dirname, 'views'));*/
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, xhrFields, Content-Type, Authorization, Accept");
  next();
});

app.use(express.static(path.join(__dirname, 'public/dist')));
// app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

/*app.use('/', routes);
app.use('/users', users);*/
app.use('/auth', authController);
app.use('/api', apiController);

// demo api which returns our json object
/*app.get('/api', function(req, res) {
  res.statusCode = 200;
  res.json({foo: 'api route'});
});*/

app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
