const RepoProduct = require('../../repository/Product');
module.exports = class Eshop {
  print(req, res) {
    let repo = new RepoProduct();
    repo.find().then((products) => {
      res.render('front/pages/eshop', {products});
    })
  }
}