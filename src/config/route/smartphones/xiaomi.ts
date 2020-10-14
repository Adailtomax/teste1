function xiaomi () {
    this.express.get('/xiaomi', (req, res) => {
      res.render('xiaomi/xiaomi')
    })
  }
  module.exports = xiaomi;

  function miseries () {
    this.express.get('/miseries', (req, res) => {
      res.render('xiaomi/miseries')
    })
  }
  module.exports = miseries;

  function redmiseries () {
    this.express.get('/redmiseries', (req, res) => {
      res.render('xiaomi/redmiseries')
    })
  }
  module.exports = redmiseries;