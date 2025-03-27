import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

// Import routes
import authRoutes from './routes/authRoutes';
import profileRoutes from './routes/profileRoutes';
import postRoutes from './routes/postsRoutes';
import categoryRoutes from './routes/categoryRoutes';


dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({ origin: 'http://localhost:3000' })); 
app.use(express.json()); 


app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/profile', profileRoutes); // Profile routes
app.use('/api/posts', postRoutes); // Post routes
app.use('/api/categories', categoryRoutes); // Category routes


app.get('/', (req: Request, res: Response) => {
  res.send('Backend is running!');
});


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});