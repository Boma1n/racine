module.exports = class Dashboard {
  print (req, res) {
    res.render('dashboard/pages/home');
  }
}