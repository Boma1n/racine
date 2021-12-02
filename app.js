// Setup:
const express = require('express');
const app = express();
const config = require('./app/config');
const path = require('path');
const sassMiddleware = require('node-sass-middleware-5');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'build'),
  debug: false,
  indentedSyntax: false,
  outputStyle: 'compressed'
}))

require('./app/routes')(app);

app.listen(config.port, () => {
  console.log(`http://localhost:${config.port}`);
});