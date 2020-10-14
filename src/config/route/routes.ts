import importExpress from 'express'
import importBodyParser from 'body-parser'
import importSession from 'express-session'

import CtrlCliente from '../../modules/controller/ClienteController'

import importplaca from './placasdevideo/rtx'

export default
class Routes {
  placavideo = importplaca
  
  
  ctrlCliente: CtrlCliente
  express: importExpress.Application
  bodyParser = importBodyParser
  session = importSession
  options = { logged: false }

  public constructor (expr_: importExpress.Application) {
    this.ctrlCliente = new CtrlCliente()
    this.express = expr_
    this.express.use(this.bodyParser.urlencoded({ extended: true }))
    this.express.use(this.session({
      secret: 'asdasd',
      resave: true,
      saveUninitialized: true
    }))
    this.index()

    // User
    this.login()
    this.meucadastro()
    this.cadastro()
    this.minhaconta()
    this.editarcadastro()
    this.meuspedidos()
    this.trocarsenha()
    this.excluirconta()
    this.fecharpedido()
    this.logoff()

    // RTX
    this.placavideo.rtx()
    this.placavideo.rtx3090()
    this.placavideo.rtx3080()
    this.placavideo.rtx3070()

    // Iphone
    this.iphone()
    this.iphone7series()
    this.iphone8series()
    this.iphone11series()
    this.iphonexseries()

    // Xiaomi
    this.xiaomi()
    this.redmiseries()
    this.miseries()

    // Samsung
    this.samsung()
    this.galaxynoteseries()
    this.galaxysseries()
    this.galaxyaseries()
  }

  private hasLogged (req): boolean {
    if (req.session.usuario) {
      this.options.logged = true
    } else {
      this.options.logged = false
    }
    return this.options.logged
  }

  private sessionExpired (req, res, redirect: string): void {
    if (!this.hasLogged(req)) {
      res.redirect(302, redirect)
    }
  }

  private globalRender (req, res, page: string) {
    this.hasLogged(req)
    res.render(page, this.options)
  }

  // Index ---------------------------------------------------------------------------------
  private index () {
    this.express.get('/', (req, res) => {
      this.globalRender(req, res, 'index')
    })
  }

  private fecharpedido () {
    this.express.get('/fecharpedido', (req, res) => {
      this.globalRender(req, res, 'fecharpedido')
    })
  }
 
}
