import dotenv from 'dotenv'
import express from 'express';
import Mongoose from 'mongoose';
import cors from 'cors';
//import config from './config';
import { apiRouter } from './routes/api.routes';
import { extRouter } from './routes/external.routes';
dotenv.config();

const app = express();
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));
app.use(express.json());
app.use(apiRouter);
app.use(extRouter);
//app.use(cors())


const ENV_VARS = {
  port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  token_secret: process.env.TOKEN_SECRET
}

app.listen(ENV_VARS.port, async () => {
  console.log('Server funcionando na porta: ', ENV_VARS.port);

  if (ENV_VARS.mongoURI) {
      Mongoose.connect(ENV_VARS.mongoURI);
  } else {
      console.log('Erro na conexão com DB.');
  }
});

export { ENV_VARS }
