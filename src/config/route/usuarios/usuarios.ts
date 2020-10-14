function login () {
    this.express.get('/login', (req, res) => {
      if (this.hasLogged(req)) {
        res.redirect(302, '/minhaconta')
        return
      }

      this.globalRender(req, res, 'user/login')
    })

    this.express.post('/login', (req, res) => {
      if (this.hasLogged(req)) {
        res.redirect(302, '/minhaconta')
        return
      }

      this.ctrlCliente.authentication(req, res)
    })
  }
  module.exports = login;
  
//------------------------------------------------------
  function logoff () {
    this.express.get('/logoff', (req, res) => {
      req.session.usuario = null
      res.redirect(302, '/login')
    })
    this.express.post('/logoff', (req, res) => {
      req.session.usuario = null
      res.redirect(302, '/login')
    })
  }
  module.exports = logoff;

  