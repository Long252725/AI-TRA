// src/router/site.js
import { Router } from 'express';
import siteController from '../app/controllers/SiteController.js';

const router = Router();

router.get('/', siteController.index);

export default router;
