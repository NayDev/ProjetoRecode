import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const server = express();

server.use(cors());
server.use(express.json());


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
    connection.query("SELECT id_comentario,nome, msg,date_format(data_comentario, '%d/%m/%Y as %H:%ihs') as data_comentario FROM comentarios", (error, result) => {
       if(error) {
          res.send(error) 
       } else{
          res.send(result)
       }
    });
});

server.post("/mensagens", (req, res) => {
    
    const { nome, msg } = req.body;
    const sql = `INSERT INTO comentarios(nome, msg) values ('${nome}', '${msg}')`;
    connection.query(sql, (error, result) => {
      if(error){
        res.json({msg:"Erro ao inserir User"})
      } else{
        res.json(result)
      }
    })
  });

  server.listen(3001);