"use strict";

var siteRouter = require('./site');
var detailsRouter = require('./details');
var chatRouter = require('./chat');
var profileRouter = require('./profile');
var orderTradeRouter = require('./orderTrade');
var historyRouter = require('./history');
var orderMuaRouter = require('./orderMua');
var postRouter = require('./post');
var loginRouter = require('./login');
var roomRouter = require('./room');
var donateRouter = require('./donate');
var routerInit = function routerInit(app) {
  app.use('/', siteRouter);
  app.use('/', detailsRouter);
  app.use('/', profileRouter);
  app.use('/', chatRouter);
  app.use('/', historyRouter);
  app.use('/', orderTradeRouter);
  app.use('/', donateRouter);
  app.use('/', roomRouter);
  app.use('/', loginRouter);
  app.use('/', postRouter);
  app.use('/', orderMuaRouter);
};
module.exports = routerInit;