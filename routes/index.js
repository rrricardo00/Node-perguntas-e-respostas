module.exports = (app) => {

  app.get('/index/:nome/:lang', (req, res) => {
    const nome = req.params.nome;
    const lang = req.params.lang;
  
    res.render("index", {
      nome,
      lang
    });
  });

}