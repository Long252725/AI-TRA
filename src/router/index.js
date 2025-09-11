const siteRouter = require('./site')
const detailsRouter = require('./details')
const chatRouter = require('./chat')
const profileRouter = require('./profile')
const orderTradeRouter = require('./orderTrade')
const historyRouter = require('./history')
const orderMuaRouter = require('./orderMua')
const postRouter = require('./post')
const routerInit = (app)=> {
    app.use('/', siteRouter)
    app.use('/', detailsRouter)
    app.use('/', profileRouter)
    app.use('/', chatRouter)
    app.use('/', historyRouter)
    app.use('/', orderTradeRouter)
    app.use('/', postRouter)
    app.use('/', orderMuaRouter)
}

module.exports = routerInit

