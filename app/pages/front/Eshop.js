const RepoProduct = require('../../repository/Product');
module.exports = class Eshop {
  print(req, res) {
    let repo = new RepoProduct();
    repo.find().then((products) => {
      res.render('front/pages/eshop', {products});
    })
  }

  printProduct(req, res) {
    let repo = new RepoProduct();
    repo.findById(req.params.id).then((product) => {
      console.log(product)
      res.render('front/pages/product', {product})
    })
  }
}