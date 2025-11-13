// src/router/post.js
import { Router } from 'express';
import postController from '../app/controllers/PostController.js';

const router = Router();

router.get('/post', postController.index);
router.post('/post/sp', postController.post);

export default router;
