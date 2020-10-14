import importExpress from 'express'


class rtx{
  express: importExpress.Application
  

public rtx () {
    this.express.get('/rtx', (req, res) => {
      res.render('rtx/rtx')
    })
  }


 public rtx3090 () {
    this.express.get('/rtx3090', (req, res) => {
      res.render('rtx/rtx3090')
    })
  }


 public rtx3080 () {
    this.express.get('/rtx3080', (req, res) => {
      res.render('rtx/rtx3080')
    })
  }
  

 public rtx3070 () {
    this.express.get('/rtx3070', (req, res) => {
      res.render('rtx/rtx3070')
    })
  }

}
export default new rtx;