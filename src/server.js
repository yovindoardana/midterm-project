import 'dotenv/config';
import express from 'express';
import connectToDatabase from './config/connection.js';
import UserRoutes from './routes/UserRoutes.js';
import VideoRoutes from './routes/VideoRoutes.js';
import ProductRoutes from './routes/ProductRoutes.js';
import CommentRoutes from './routes/CommentRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

connectToDatabase();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users', UserRoutes);
app.use('/videos', VideoRoutes);
app.use('/products', ProductRoutes);
app.use('/comments', CommentRoutes);

app.get('/', (req, res) => {
  res.status(200).send('Server is Ready');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
