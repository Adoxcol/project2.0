import { Request, Response } from 'express';
import { findAllPosts } from '../repositories/postsRepository';


export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await findAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};