module.exports = app => {
  // Home:
  app.get('/', (req, res) => {
    const Home = require('./pages/Home');
    (new Home()).print(req, res);
  });

  // E-Shop
  app.get('/eShop', (req, res) => {
    const Eshop = require('./pages/Eshop');
    (new Eshop()).print(req, res);
  });

  // Events
  app.get('/events', (req, res) => {
    const Events = require('./pages/Events');
    (new Events()).print(req, res);
  });

  // Shop
  app.get('/stores', (req, res) => {
    const Stores = require('./pages/Stores');
    (new Stores()).print(req, res);
  });

  // Team
  app.get('/team', (req, res) => {
    const Team = require('./pages/Team');
    (new Team()).print(req, res);
  });

  // FAQ
  app.get('/faq', (req, res) => {
    const Faq = require('./pages/Faq');
    (new Faq()).print(req, res);
  });

  // Basket
  app.get('/basket', (req, res) => {
    const Basket = require('./pages/Basket');
    (new Basket()).print(req, res);
  });

  // Dashboard
  app.get('/dashboard', (req, res) => {
    const Dashboard = require('./pages/Dashboard');
    (new Dashboard()).print(req, res);
  });

  // Authenticated:
  app.get('/authenticated', (req, res) => {
    const Authenticated = require('./pages/Authenticated');
    (new Authenticated()).print(req, res);
  })

  // Subscription
  app.post('/authenticated/subscription', (req, res) => {
    const Subscription = require('./pages/Authenticated');
    (new Subscription()).processSub(req, res);
  });

  // Login
  app.post('/authenticated/login', (req, res) => {
    const Login = require('./pages/Authenticated');
    (new Login()).processLog(req, res);
  });

  // Logout
  app.get('/logout', (req, res) => {
    const Logout = require('./pages/Authenticated');
    (new Logout()).logout(req, res);
  })
}