// src/router/donate.js
import { Router } from 'express';
import donateController from '../app/controllers/DonateController.js';

const router = Router();

router.get('/sv5t', donateController.index);

export default router;
