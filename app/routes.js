module.exports = app => {

  // E-Shop
  app.get('/eShop', (req, res) => {
    const Eshop = require('./pages/front/Eshop');
    (new Eshop()).print(req, res);
  });

  // Events
  app.get('/events', (req, res) => {
    const Events = require('./pages/front/Events');
    (new Events()).print(req, res);
  });

  // Shop
  app.get('/stores', (req, res) => {
    const Stores = require('./pages/front/Stores');
    (new Stores()).print(req, res);
  });

  // Team
  app.get('/team', (req, res) => {
    const Team = require('./pages/front/Team');
    (new Team()).print(req, res);
  });

  // FAQ
  app.get('/faq', (req, res) => {
    const Faq = require('./pages/front/Faq');
    (new Faq()).print(req, res);
  });

  // Basket
  app.get('/basket', (req, res) => {
    const Basket = require('./pages/front/Basket');
    (new Basket()).print(req, res);
  });

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

  // Authenticated:
  app.get('/authenticated', (req, res) => {
    const Authenticated = require('./pages/front/Authenticated');
    (new Authenticated()).print(req, res);
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