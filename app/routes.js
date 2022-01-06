module.exports = app => {

  // Dashboard / Home
  app.get('/dashboard/home', (req, res) => {
    const Dashboard = require('./pages/back/Dashboard');
    (new Dashboard()).print(req, res);
  });

  //Dashboard / Products
  app.get('/dashboard/products', (req, res) => {
    const Products = require('./pages/back/Products');
    (new Products()).print(req, res);
  })
  app.get('/dashboard/products/delete/:id', (req, res) => {
    const Products = require('./pages/back/Products');
    (new Products()).delete(req, res);
  })

  // Dashboard / Products / add
  app.get('/dashboard/products/add', (req, res) => {
    const Products = require('./pages/back/Products');
    (new Products()).printAddProduct(req, res);
  });
  app.post('/dashboard/products/add', (req, res) => {
    const Products = require('./pages/back/Products');
    (new Products()).processAddProduct(req, res);
  })

  // Dashboard / Products / Edit
  app.get('/dashboard/products/edit/:id', (req, res) => {
    const Products = require('./pages/back/Products');
    (new Products()).printEditProduct(req, res);
  })
  app.post('/dashboard/products/edit/:id', (req, res) => {
    const Products = require('./pages/back/Products');
    (new Products()).processEditProduct(req, res);
  })

  // Subscription
  app.post('/authenticated/subscription', (req, res) => {
    const Subscription = require('./pages/front/Authenticated');
    (new Subscription()).processSub(req, res);
  });

  // Login
  app.post('/authenticated/login', (req, res) => {
    const Login = require('./pages/front/Authenticated');
    (new Login()).processLog(req, res);
  });

  // Logout
  app.get('/logout', (req, res) => {
    const Logout = require('./pages/front/Authenticated');
    (new Logout()).logout(req, res);
  })
}