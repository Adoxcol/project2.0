import { Request, Response } from 'express';
import { createCategory } from '../repositories/categoryRepository';

export const createCategoryHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    const category = await createCategory({ name });
    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create category' });
  }
};