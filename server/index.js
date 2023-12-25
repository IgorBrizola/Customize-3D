import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/dalle', dalleRoutes); 

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello From DALL·E' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
