module.exports = app => {
  // Home:
  app.get('/', (req, res) => {
    const Home = require('./pages/Home');
    (new Home()).print(req, res);
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