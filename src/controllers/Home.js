module.exports = class Home {
  print (req, res) {
    res.render('./front/Home/home');
  };
}