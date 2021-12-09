//import http from 'http';
import express from 'express';
const app = express();
app.use(express.json());
/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  res.end('Funcionou');
});*/

const port = 5000;
app.get('/', (req, res) => {
  //res.sendStatus(300).json({
    res.json({  
      message: 'Servidor respondendo'
  })
});
app.listen(port, () => {
  console.log('Server funcionando na porta:', port);
});