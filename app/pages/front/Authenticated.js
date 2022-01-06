const bcrypt = require('bcryptjs');
const RepoUser = require('../../repository/User');

module.exports = class Authenticated {
  entity;

  print (req, res) {
    res.render('front/pages/Authenticated')
  }

  checkPassword(password, secondPassword) {
    return password === secondPassword;
  }

  processSub (req, res) {
    let entity = {
      civility: req.body.civility || '',
      firstname: req.body.firstname || '',
      lastname: req.body.lastname || '',
      email: req.body.email || '',
      password: req.body.password || '',
      phone: req.body.phone || '',
      admin: false
    };
    entity.password = bcrypt.hashSync(
      entity.password,
      bcrypt.genSaltSync(10)
    );

    let repo = new RepoUser();
    if (req.body.password === req.body.verifyPassword) {
      repo.emailExists(entity.email).then(result => {
        if(result) {
          res.render('front/pages/Authenticated', {
            error: 'Cette email existe déjà...',
            form: entity
          })
        } else {
          repo.add(entity).then( user => {
            req.flash('notify', 'Votre compte a bien été créé.')
            res.redirect('/');
          }, e => {
            console.log(e)
            res.render('front/pages/Authenticated', {
              error: `L'enregistrement en base  de données a échoué`,
              form: entity
            })
          })
        }
      })
    } else {
      res.render('front/pages/Authenticated', {
        error: 'Une erreur est survenue dans le mot de passe...',
        from: {password: req.body.password || ''}
      })
    }
  }

  processLog (req, res) {
    let repo = new RepoUser();
    repo.getUserByEmail(req.body.email).then((user) => {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        req.session.user = user;
        req.session.admin = user.admin;
        req.flash('notify', 'Vous êtes maintenant connecté');
        res.redirect('/');
      } else {
        res.render('front/pages/Authenticated', {
          error: `L'identification a échouée...`,
          from: {email: req.body.email || ''}
        });
      }
    }, () => {
      res.render('/front/pages/Authenticated', {
        error: `L'identification a échouée...`,
        form: {email: req.body.email || ''}
      });
    })
  }

  logout(req, res) {
    req.session.user = null;
    req.flash('notify', 'Vous êtes maintenant déconnecté.');
    res.redirect('/');
  }
}