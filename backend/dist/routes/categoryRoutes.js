import express from 'express';
import { createCategoryHandler } from '../controllers/categoryController';
const router = express.Router();
router.post('/', createCategoryHandler);
export default router;
