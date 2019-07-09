/**
 * >_Mr.Zik
 * Express Dependencies
 */
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let bodyParser = require('body-parser');

let product = require('./routes/product');
let app = express();

/**
 * >_Mr.Zik
 * 
 */

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/ng5-crud', { useMongoClient: true, promiseLibrary: require('bluebird') })
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

/**
 * >_Mr.Zik
 * 
 */

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/product', product);
app.use('/products', express.static(path.join(__dirname, 'dist')));
app.use('/product-create', express.static(path.join(__dirname, 'dist')));
app.use('/product-details/:id', express.static(path.join(__dirname, 'dist')));
app.use('/product-edit/:id', express.static(path.join(__dirname, 'dist')));

// app.use('/books', express.static(path.join(__dirname, 'dist')));
// app.use('/book', book);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/**
 * >_Mr.Zik
 * 
 */
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;