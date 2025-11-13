// src/router/details.js
import { Router } from 'express';
import detailsController from '../app/controllers/DetailsController.js';

const router = Router();

router.get('/details', detailsController.index);

export default router;
