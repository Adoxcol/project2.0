import { Request, Response } from 'express';
import { findProfileByUserId } from '../repositories/profileRepository';


export const getProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user.id; 
    const profile = await findProfileByUserId(userId);
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
};