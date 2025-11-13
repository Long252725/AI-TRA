// src/router/index.js
import { Router } from 'express';
import chatController from '../app/controllers/ChatController.js';

const router = Router();

router.get('/chat', chatController.index);

export default router;
