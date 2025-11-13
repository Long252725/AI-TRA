// src/router/history.js
import { Router } from 'express';
import historyController from '../app/controllers/HistoryController.js';

const router = Router();

router.get('/history', historyController.index);

export default router;
