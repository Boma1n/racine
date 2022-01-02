const RepoProduct = require('../../repository/Product');

module.exports = class Products {
  print(req, res){
    if(typeof req.session.user !== 'undefined') {
      let repo = new RepoProduct();
      repo.find().then((products) => {
        res.render('dashboard/pages/products', {products});
      })
    } else {
      req.flash('error', `Vous devez être connecté pour accéder à l'administration`);
      res.redirect('/authenticated');
    }
  }

  printAddProduct(req, res){
    res.render('dashboard/pages/productsAdd');
  }

  printEditProduct(req, res){
    if (typeof req.session.user !== 'undefined') {
      let repo = new RepoProduct();
      repo.findById(req.params.id).then((product) => {
        console.log('test', product);
        res.render('dashboard/pages/productsEdit', {product});
      })
    } else {
      req.flash('erro', `Vous devez être connecté pour éccéder à l'administration`);
      res.redirect('/authenticated');
    }
  }

  processAddProduct(req, res) {
    let entity = {
      name: req.body.name || '',
      size: req.body.size || '',
      scientifiqueName: req.body.scientifiqueName || '',
      commonName: req.body.commonName || '',
      family: req.body.family || '',
      origin: req.body.origin || '',
      location: req.body.location || '',
      description: req.body.description || '',
      exposure: req.body.exposure || '',
      watering: req.body.watering || '',
      repotting: req.body.repotting || '',
      price: req.body.price || ''
    }

    let repo = new RepoProduct();
    repo.add(entity).then(product => {
      req.flash('notify', 'Votre produit a bien était crée !');
      res.redirect('/dashboard/products');
    })
  }

  processEditProduct(req, res) {
    let entity = {
      name: req.body.name || '',
      size: req.body.size || '',
      scientifiqueName: req.body.scientifiqueName || '',
      commonName: req.body.commonName || '',
      family: req.body.family || '',
      origin: req.body.origin || '',
      location: req.body.location || '',
      description: req.body.description || '',
      exposure: req.body.exposure || '',
      watering: req.body.watering || '',
      repotting: req.body.repotting || '',
      price: req.body.price || ''
    }

    let repo = new RepoProduct();
    repo.update({_id: req.params.id}, entity).then(product => {
      req.flash('notify', 'Votre produit a bien était mis a jour !');
      res.redirect('/dashboard/products');
    })
  }

  delete(req, res) {
    if (typeof req.session === 'undefined' || typeof req.session.user === 'undefined') {
      req.flash('error', `Vous devez être connecté pour accéder à l'administration`);
      res.redirect('/authenticated');
      return;
    }
    if (typeof req.params.id != 'undefined' && req.params.id != '') {
      let repo = new RepoProduct();
      repo.delete({_id: req.params.id}).then(() => {
        req.flash('notify', 'Le produit a bien était supprimé !');
        res.redirect('/dashboard/products');
      }, () => {
        req.flash('error', 'La suppression du bien a échoué !');
        res.redirect('/dashboard/products');
      })
    } else {
      req.flash('error', 'Une erreur est survenue...');
      res.redirect('/dashboard/products');
    }
  }
}