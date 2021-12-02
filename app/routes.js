module.exports = app => {
  app.get('/', (req, res) => {
    const Home = require('../src/controllers/Home');
    (new Home()).print(req, res);
  });
}