module.exports = app => {
  app.get('/', (req, res) => {
    const Home = require('./pages/Home');
    (new Home()).print(req, res);
  });
}