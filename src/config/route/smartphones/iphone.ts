   function iphone () {
    this.express.get('/iphone', (req, res) => {
      res.render('iphone/iphone')
    })
  }
  module.exports = iphone;


  function iphone7series () {
    this.express.get('/iphone7series', (req, res) => {
      res.render('iphone/iphone7series')
    })
  }
  module.exports = iphone7series;


  function iphone8series () {
    this.express.get('/iphone8series', (req, res) => {
      res.render('iphone/iphone8series')
    })
  }
  module.exports = iphone8series;


  function iphone11series () {
    this.express.get('/iphone11series', (req, res) => {
      res.render('iphone/iphone11series')
    })
  }
  module.exports = iphone11series;


  function iphonexseries () {
    this.express.get('/iphonexseries', (req, res) => {
      res.render('iphone/iphonexseries')
    })
  }
  module.exports = iphonexseries;