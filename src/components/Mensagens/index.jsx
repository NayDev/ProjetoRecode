/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './style.css';

class Mensagens extends React.Component {

  constructor(props){
    super(props);
    this.state=({
      db:[]
    });
    this.exibirMensagens();
  }

  exibirMensagens(){
    fetch("http://localhost/Projeto-React/src/backend/ClassMensagens.php")
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        db: responseJson
      });
    });
  }

  render(){
    return(
      <div className=" container-fluid">
        {/* puxa todos os dados do banco. */}
        <CardMensagens arrayMensagens={this.state.db} /> 
      </div>
    );
  }
}

const CardMensagens = () => { // Função para Mensagens
  const [student, setStudent] = React.useState([]) //Estou retornando todos os dados que vem do banco.
  const [render, setRender] = React.useState(false) // Ele faz com q as msg apareça na tela
  const [msg, setMsg] = React.useState(false)// Estou fazendo um POST e GET das mensagens
  const [nome, setNome] = React.useState(""); 
  const [mensagem, setMensagens] = React.useState(""); 

  
  React.useEffect(async () => { // Fazendo uma promise
      const url = "http://localhost/Projeto-React/src/backend/ClassMensagens.php";
      const response = await fetch(url);
      setStudent(await response.json());
  }, [render]) // segundo parametro

  function registerStudent(event){
      event.preventDefault(); // para não recarregar a pag.
      let formData = new FormData(event.target)

      const url = "http://localhost/Projeto-React/src/backend/ClassMensagens.php";
      
      fetch(url, {//dois parametros POST
          method:"POST",
          body: formData
      }).then((response) => response.json()).then((dados) => { //GET dos dados q estão no JSON.
          setRender(!render);//Negação do render
          setMensagens(""); 
          setNome(""); 
          setMsg(dados); //Configurado para verdadeiro
          setTimeout(() => { //Colocando tempo para sair a mensagem
              setMsg(false);
          },2000)
      })
     
  }

  return (
      <div className="container py-5">
        <h2 className="mt-4 text-center">Escreva uma mensagem</h2>
          <div className="card w-75 mx-auto border-0">
          
              <form onSubmit={registerStudent}>
                
                  <input value={nome} onChange={(event) => setNome(event.target.value)}  className="form-control mt-2" type="text" name="nome" placeholder="Digite seu nome"/>
                  <br/> 
                  
                  <textarea value={mensagem} onChange={(event) => setMensagens(event.target.value)} rows="3" cols="5" className="form-control mt-2" type="text" name="msg" placeholder="Digite sua mensagem"></textarea>
                  <button className="btn btn-info w-100 mt-2">Enviar</button>
              </form>
              { msg && 
                <div className="alert alert-success mx-auto mt-4 w-75" role="alert"> 
                  Cadastro efetuado com sucesso! 
                </div>
              }
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
            )
          })}
             </tbody>
           </table>
      </div>
  );
}

export default Mensagens;