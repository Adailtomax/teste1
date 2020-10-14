function samsung () {
    this.express.get('/samsung', (req, res) => {
      res.render('samsung/samsung')
    })
  }
  module.exports = samsung;

  function galaxynoteseries () {
    this.express.get('/galaxynoteseries', (req, res) => {
      res.render('samsung/galaxynoteseries')
    })
  }
  module.exports = samsung;

  function galaxysseries () {
    this.express.get('/galaxysseries', (req, res) => {
      res.render('samsung/galaxysseries')
    })
  }
  module.exports = galaxysseries;

  function galaxyaseries () {
    this.express.get('/galaxyaseries', (req, res) => {
      res.render('samsung/galaxyaseries')
    })
  }
  module.exports = galaxyaseries;