import { useState, useEffect } from "react";
import "./style.css";

export default function Mensagens() {
  const [student, setStudent] = useState([]); //Estou retornando todos os dados que vem do banco.
  const [render, setRender] = useState(false); // Ele faz com q as msg apareça na tela
  const [msg, setMsg] = useState(false); // Estou fazendo um POST e GET das mensagens
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  

  useEffect(async () => {
    // Fazendo uma promise
    const url = "http://localhost:3001/mensagens";
    const response = await fetch(url);
    setStudent(await response.json());
  }, [render]); // segundo parametro

  function registerStudent(event) {
    event.preventDefault(); // para não recarregar a pag.
    let formData = {
      nome: nome,
      msg: mensagem
    };
    const url = "http://localhost:3001/mensagens";
    fetch(url, {
      //dois parametros POST
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((dados) => {
        //GET dos dados q estão no JSON.
        setRender(!render); //Negação do render
        setMensagem("");
        setNome("");
        setMsg(dados); //Configurado para verdadeiro
        setTimeout(() => {
          //Colocando tempo para sair a mensagem
          setMsg(false);
        }, 2000);
      });
  }

  return (
    <>
      <div className="container py-5">
        <h2 className="mt-4 text-center">Escreva uma mensagem</h2>
        <div className="card w-75 mx-auto border-0">
          <form onSubmit={registerStudent}>
            <input
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              className="form-control mt-2"
              type="text"
              name="nome"
              placeholder="Digite seu nome"
            />
            <br />

            <textarea
              value={mensagem}
              onChange={(event) => setMensagem(event.target.value)}
              rows="3"
              cols="5"
              className="form-control mt-2"
              type="text"
              name="msg"
              placeholder="Digite sua mensagem"
            ></textarea>
            <button className="btn btn-info w-100 mt-2">Enviar</button>
          </form>
          {msg && (
            <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
              Cadastro efetuado com sucesso!
            </div>
          )}
        </div>
        <h2 className="mt-4 text-center py-4">Lista de Mensagem</h2>

        <table className=" container table" id="lista">
          <thead className="table-dark">
            <tr>
              <th>Data</th>
              <th>Nome</th>
              <th>Mensagem</th>
            </tr>
          </thead>
          <tbody>
            {student.map((element) => {
              return (
                <tr>
                  <th>{element.data_comentario}</th>
                  <td>{element.nome}</td>
                  <td>{element.msg}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
