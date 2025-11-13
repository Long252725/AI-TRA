// src/router/index.js
import siteRouter from './site.js';
import detailsRouter from './details.js';
import chatRouter from './chat.js';
import profileRouter from './profile.js';
import orderTradeRouter from './orderTrade.js';
import historyRouter from './history.js';
import orderMuaRouter from './orderMua.js';
import postRouter from './post.js';
import loginRouter from './login.js';
import roomRouter from './room.js';
import donateRouter from './donate.js';

const routerInit = (app) => {
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

export default routerInit;
