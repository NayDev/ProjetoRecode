import React from 'react';
import TodosProdutos from './TodosProdutos.jsx';

class Produtos extends React.Component {

  constructor(){
    super();
    this.state=({
      db:[]
    });
    this.exibirProdutos();
  }

  exibirProdutos(){
    fetch("http://localhost/Projeto-React/src/backend/ClassProdutos.php")
    .then((response) => response.json())
    .then((responseJson)=>{
      this.setState({
        db: responseJson
      });
      
    });
    
  }

  //----Evento clique

  exibirCategoria = (categoria) => {
    let elementos = document.getElementsByClassName('box_produto');
   
    for (var i = 0; i < elementos.length; i++) {
        
        if (categoria === elementos[i].id) {
            elementos[i].style = "display:block";
        } else {
            elementos[i].style = "display:none";
        }

    }
  }
  exibirTodos = () => {
    let elementos = document.getElementsByClassName('box_produto');

    for (var i = 0; i < elementos.length; i++) {
      elementos[i].style= "";
    }
  }
 
  render(){
    return(
      <div className=" container-fluid">
        <div className="dropdown d-flex justify-content-center p-5">
          <a className="btn text-white dropdown-toggle " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorias
          </a>
          <div>
            <ul className="dropdown-menu border-0 rounded" aria-labelledby="dropdownMenuLink">
              <li   className="dropdown-item" onClick={() => this.exibirTodos('todos')}>Todos(12)</li>
              <li  className="dropdown-item" onClick={() => this.exibirCategoria('geladeira')}>Geladeiras(3)</li>
              <li  className="dropdown-item" onClick={() => this.exibirCategoria('fogao')}>Fogões(2)</li>
              <li  className="dropdown-item" onClick={() => this.exibirCategoria('microondas')}>Microondas(3)</li>
              <li  className="dropdown-item" onClick={() => this.exibirCategoria('lavadoraDeRoupas')}>Lavadora de Roupas(2)</li>
              <li  className="dropdown-item" onClick={() => this.exibirCategoria('lavaLoucas')}>Lava Louças(2)</li>
            </ul>
          </div>
        </div>
        <TodosProdutos arrayProdutos={this.state.db} />
      </div>
      
    );
  }
}


export default Produtos;