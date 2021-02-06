const app = require('./src/config/server');
const mensagensModel = require('./src/models/mensagensModel');
const connectionMysql = require('./src/config/connectionMysql');
const mongoConnection = require('./src/config/mongoConnection');


app.get('/products', (req, res) => {
    connectionMysql.query('SELECT * from produtos', (error, result) => {
      res.json(result ? result : error);
    });
  });
  
  app.get('/mensagens', async (req, res) => {
    res.json(await mensagensModel.find());
  });
  
  app.post('/mensagens', async (req, res) => {
    const { nome, msg } = req.body;
    res.json(await mensagensModel.create({ nome, msg }));
  });