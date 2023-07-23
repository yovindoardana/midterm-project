import 'dotenv/config';
import express from 'express';
import connectToDatabase from './config/connection.js';

const app = express();
const PORT = process.env.PORT || 3001;

connectToDatabase();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.status(200).send('Server is Ready');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
