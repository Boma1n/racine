// Setup:
const config = require('./app/config');

const express = require('express');
const session = require('express-session');
const flash = require('express-flash-messages');


const app = express();
const path = require('path');

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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Routes
app.get('/', (req, res) => {
  res.render('front/pages/home')
});

app.get('/events', (req, res) => {
  res.render('front/pages/events');
})

require('./app/routes')(app);

app.get('*', function(req, res){
  res.render('error');
});

app.listen(config.port, () => {
  console.log(`http://localhost:${config.port}`);
});