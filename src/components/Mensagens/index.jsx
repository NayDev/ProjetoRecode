import React from 'react';
import './style.css';

class Mensagens extends React.Component {

  constructor(){
    super();
    this.state=({
      db:[]
    });
    this.exibirMensagens();
    
    
  }

  exibirMensagens(){
    fetch("http://localhost/fullstack/src/backend/ClassMensagens.php")
    .then((response) => response.json())
    .then((responseJson)=>{
      this.setState({
        db: responseJson
      });
      
    });
    
  }


  render(){
    return(
      <div className=" container-fluid">
        <BoxMensagens arrayMensagens={this.state.db} />
      </div>
    );
  }
}
class BoxMensagens extends React.Component {
  render(){
    return(
      <>
      <h1 className="py-2">Mensagens</h1>
        <div className="container ">
          <div className="row d-flex justify-content-between py-3 ">
            <img className="img-fluid fot1" src="./img/email.png" />
              <p className="row d-flex justify-content-between py-3 m-0">contato@fullstackeletro.com</p>
                <img className="img-fluid fot2" src="./img/whats.svg" />
              <p className="row d-flex justify-content-between py-3 m-0">(11) 99999-99999</p>
          </div>
        <form className="container" method="POST" action="mensagens">
          <div className="form-group">
            <label for="nome">Nome</label>
            <input type="text" name="nome" class="form-control" id="nome" aria-describedby="nome" placeholder="Digite seu nome" />
          </div>
          <div className="form-group">
            <label for="msg">Mensagem</label>
            <textarea type="password" name="msg" class="form-control" id="msg" placeholder="Digite sua Mensagem"></textarea>
          </div>
            <button type="submit" name="submit"  value="Enviar" class="btn btn-primary">Enviar</button>
        </form>
        <h2 className="mt-4 text-center">Lista de Mensagem</h2>
          <table class=" container table">
            
            <thead class="table-dark">
              <tr>
                <th>Data</th>
                <th>Nome</th>
                <th>Mensagem</th>
              </tr>
            </thead>
            <tbody>
            {this.props.arrayMensagens.map(
              row=>
              <tr>
             
             <th>{row.data}</th>
             <td>{row.nome}</td>
             <td>{row.msg}</td>
           </tr>
            )}
              </tbody>
          </table>
          </div>
      </>
    );
  }
}

export default Mensagens;