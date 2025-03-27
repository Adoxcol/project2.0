import express from 'express';
import { createPostHandler, getPosts } from '../controllers/postsController';
const router = express.Router();
router.get('/', getPosts);
router.post('/', createPostHandler);
export default router;
