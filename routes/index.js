module.exports = (app) => {

  app.get('/index', (req, res) => {
    res.render('index');
  });
}