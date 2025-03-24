import { Request, Response } from 'express';
import { createPost, findAllPosts } from '../repositories/postsRepository';


export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await findAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};


export const createPostHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content, authorId } = req.body;
    const post = await createPost({ title, content, authorId });
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create post' });
  }
};