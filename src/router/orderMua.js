// src/router/orderMua.js
import { Router } from 'express';
import orderMuaController from '../app/controllers/OrderMuaController.js';

const router = Router();

router.get('/orderMua', orderMuaController.index);

export default router;
