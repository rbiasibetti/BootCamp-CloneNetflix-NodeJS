import dotenv from 'dotenv'
import express from 'express';
import Mongoose from 'mongoose';
import cors from 'cors';
//import config from './config';
import serveless from 'serverless-http';
import { apiRouter } from './routes/api.routes';
import { extRouter } from './routes/external.routes';
dotenv.config();

const app = express();
//const allowedOrigins = ['http://localhost:3000'];
//const options: cors.CorsOptions = {
//  origin: allowedOrigins
//};
//app.use(cors(options));
app.use(cors())
app.use(express.json());
app.use(apiRouter);
app.use(extRouter);



const ENV_VARS = {
  //port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  token_secret: process.env.TOKEN_SECRET
}

Mongoose.connect(ENV_VARS.mongoURI as string);
/*
app.listen(ENV_VARS.port, async () => {
  console.log('Server funcionando na porta: ', ENV_VARS.port);

  if (ENV_VARS.mongoURI) {
      Mongoose.connect(ENV_VARS.mongoURI);
  } else {
      console.log('Erro na conexão com DB.');
  }
});

export { ENV_VARS }
*/
export const handler = serveless(app, { callbackWaitsForEmptyEventLoop: false });