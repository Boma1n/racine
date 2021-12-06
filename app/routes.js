module.exports = app => {
  // Home:
  app.get('/', (req, res) => {
    const Home = require('./pages/Home');
    (new Home()).print(req, res);
  });

  // Authenticated:
  app.get('/authenticated', (req, res) => {
    const Authenticated = require('./pages/Authenticated');
    (new Authenticated()).print(req, res);
  })
}