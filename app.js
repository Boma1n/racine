// Setup:
const express = require('express');
const app = express();
const config = require('./app/config');
const path = require('path');
const session = require('express-session');
const flash = require('express-flash-messages');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(session({
  secret: config.appKey, resave: false, saveUninitialized: false,
  cookie: {maxAge: 60 * 1000 * 60 * 3}
}));
app.use(flash());
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
})
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

require('./app/routes')(app);

app.get('*', function(req, res){
  res.render('error');
});

app.listen(config.port, config.host, () => {
  console.log(`http://localhost:${config.port}`);
});