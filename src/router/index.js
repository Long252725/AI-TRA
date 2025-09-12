const siteRouter = require('./site')
const detailsRouter = require('./details')
const chatRouter = require('./chat')
const profileRouter = require('./profile')
const orderTradeRouter = require('./orderTrade')
const historyRouter = require('./history')
const orderMuaRouter = require('./orderMua')
const postRouter = require('./post')
const loginRouter = require('./login')
const roomRouter = require('./room')
const donateRouter = require('./donate')
const routerInit = (app)=> {
    app.use('/', siteRouter)
    app.use('/', detailsRouter)
    app.use('/', profileRouter)
    app.use('/', chatRouter)
    app.use('/', historyRouter)
    app.use('/', orderTradeRouter)
    app.use('/', donateRouter)
    app.use('/', roomRouter)
    app.use('/', loginRouter)
    app.use('/', postRouter)
    app.use('/', orderMuaRouter)
}

module.exports = routerInit

