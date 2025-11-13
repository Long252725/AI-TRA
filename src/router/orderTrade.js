// src/router/orderTrade.js
import { Router } from 'express';
import orderTradeController from '../app/controllers/OrderTradeController.js';

const router = Router();

router.get('/orderTrade', orderTradeController.index);

export default router;
