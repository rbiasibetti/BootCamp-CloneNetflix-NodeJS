import express from 'express';
import Mongoose from 'mongoose';
import config from './config';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Servidor respondendo'
  })
});

app.listen(config.PORT, () => {
  console.log('Server funcionando na porta:', config.PORT);
  Mongoose.connect(config.MONGO_URI);
});
