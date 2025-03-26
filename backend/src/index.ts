import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import profileRoutes from './routes/profileRoutes';
import postRoutes from './routes/postsRoutes';
import categoryRoutes from './routes/categoryRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use('/auth', authRoutes);


app.use('/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('Backend is running!');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});