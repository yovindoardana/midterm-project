import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.status(200).send('Server is Ready');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
