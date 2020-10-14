function cadastro () {
    this.express.get('/cadastro', (req, res) => {
      this.globalRender(req, res, 'user/cadastro')
    })

    this.express.post('/cadastro', (req, res) => {
      this.ctrlCliente.register(req, res)
    })
  }

  module.exports = cadastro;

  //--------------------------------------------------------

  function editarcadastro () {
    this.express.get('/editarcadastro', (req, res) => {
      this.sessionExpired(req, res, '/login')
      this.ctrlCliente.view(req, res, 'user/editarcadastro')
    })
    this.express.post('/editarcadastro', (req, res) => {
      this.sessionExpired(req, res, '/login')
      this.ctrlCliente.update(req)
      res.redirect(req.get('referer'))
    })
  }

  module.exports = editarcadastro;

   //--------------------------------------------------------

   function excluirconta () {
    this.express.get('/excluirconta', (req, res) => {
      this.sessionExpired(req, res, '/login')
      this.globalRender(req, res, 'user/excluirconta')
    })

    this.express.post('/excluirconta', (req, res) => {
      this.sessionExpired(req, res, '/login')
      this.ctrlCliente.delete(req, res)
    })
  }
  module.exports = excluirconta;

   //--------------------------------------------------------

   
  function meucadastro () {
    this.express.get('/meucadastro', (req, res) => {
      this.sessionExpired(req, res, '/login')
      this.ctrlCliente.view(req, res, 'user/meucadastro')
    })
  }

  module.exports = meucadastro;

   //--------------------------------------------------------

   function minhaconta () {
    this.express.get('/minhaconta', (req, res) => {
      this.sessionExpired(req, res, '/login')
      this.globalRender(req, res, 'user/minhaconta')
    })
  }
  module.exports = minhaconta;

   //--------------------------------------------------------

   function trocarsenha () {
    this.express.get('/trocarsenha', (req, res) => {
      this.sessionExpired(req, res, '/login')
      this.globalRender(req, res, 'user/trocarsenha')
    })
    this.express.post('/trocarsenha', (req, res) => {
      this.sessionExpired(req, res, '/login')
      this.ctrlCliente.updatePassword(res, req)
      this.globalRender(req, res, 'user/trocarsenha')
    })
  }

  module.exports = trocarsenha;

   //--------------------------------------------------------

   function meuspedidos () {
    this.express.get('/meuspedidos', (req, res) => {
      this.sessionExpired(req, res, '/login')
      this.globalRender(req, res, 'user/meuspedidos')
    })
  }

  module.exports = meuspedidos;

   //--------------------------------------------------------