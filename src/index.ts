import express from 'express';
import Mongoose from 'mongoose';
import config from './config';
import { apiRouter } from './routes/api.routes';

const app = express();
app.use(express.json());
app.use(apiRouter);


app.listen(config.PORT, () => {
  console.log('Server funcionando na porta:', config.PORT);
  Mongoose.connect(config.MONGO_URI);
});
