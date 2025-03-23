import {Request, Response} from 'express';
import {hashPassword, comparePassword, generateToken} from '../utils/authUtils';
import {createUser, findUserByEmail} from '../services/userRepositories';

export const register = async (req: Request, res: Response) => {
    try{
      const {email, password} = req.body;
      const hashedPassword = await hashPassword(password);
      const user = await createUser({email, password: hashedPassword});
      res.status(201).json({message: 'User registered successfully', user});
    } catch (error) {
      console.error(error);
      res.status(500).json({message: 'Internal server error'});
    }