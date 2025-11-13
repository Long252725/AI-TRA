// src/router/profile.js
import { Router } from 'express';
import profileController from '../app/controllers/ProfileController.js';

const router = Router();

router.get('/profile', profileController.index);

export default router;
