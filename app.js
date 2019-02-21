const Express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

const app = Express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use(Express.static('public'));


module.exports = app;