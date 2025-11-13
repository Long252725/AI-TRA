// src/router/room.js
import { Router } from 'express';
import roomController from '../app/controllers/RoomController.js';

const router = Router();

router.get('/room', roomController.index);

export default router;
