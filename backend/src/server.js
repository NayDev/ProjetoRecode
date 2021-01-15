import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const server = express();

server.use(express.json());
server.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fseletro"
})

server.get("/products", (req, res) => {
    connection.query("SELECT * FROM produtos", (error, result) => {
       if(error) {
          res.send(error) 
       } else{
          res.send(result)
       }
    });
});

server.get("/stores", (req, res) => {
   connection.query("SELECT * FROM lojas", (error, result) => {
      if(error) {
         res.send(error) 
      } else{
         res.send(result)
      }
   });
});

server.get("/mensagens", (req, res) => {
    connection.query("SELECT * FROM comentarios", (error, result) => {
       if(error) {
          res.send(error) 
       } else{
          res.send(result)
       }
    });
});

server.post("/mensagens", (req, res) => {
    const { name, msg } = req.body;
    connection.query(`INSERT INTO comentarios(name, msg) values ('${name}', '${msg})`, (error, result) => {
      if(error){
        res.send("Erro ao inserir User")
      } else{
        res.send("Usuario Cadastrado")
      }
    })
  });

  server.listen(3001);