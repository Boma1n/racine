// Setup:
const express = require('express');
const app = express();
const config = require('./app/config');
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));

require('./app/routes')(app);

app.listen(config.port, () => {
  console.log(`http://localhost:${config.port}`);
});