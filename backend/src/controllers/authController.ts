import { NextFunction, Request, Response } from 'express';
import { hashPassword, comparePassword, generateToken } from '../utils/authUtils';
import { createUser, findUserByEmail } from '../repositories/authRepository';

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await hashPassword(password);
        const user = await createUser({ email, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) { 
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, password } = req.body;
      const user = await findUserByEmail(email);
  
      if (!user || !(await comparePassword(password, user.password))) {
        res.status(401).json({ error: 'Invalid credentials' });
        return; 
      }
  
      const token = generateToken(user.id);
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      next(error); 
    }
  };