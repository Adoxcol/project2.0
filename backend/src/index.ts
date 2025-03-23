import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes'


dotenv.config();

const app = express();
const PORT  = process.env.PORT || 3000;


app.use(express.json());

app.use('/auth', authRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});