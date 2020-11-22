import React from 'react';
//import './style.css';

class Produtos extends React.Component {

  constructor(){
    super();
    this.state=({
      db:[]
    });
    this.exibirProdutos();
  }

  exibirProdutos(){
    fetch("http://localhost/fullstack/src/api/ClassProdutos.php")
    .then((response) => response.json())
    .then((responseJson)=>{
      this.setState({
        db: responseJson
      });
      
    });
    
  }
  

  render(){
    return(
      <div class=" container-fluid">
        <div class="dropdown d-flex justify-content-center p-5">
          <a class="btn text-white dropdown-toggle " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorias
          </a>
          <div class="dropdown-menu border-0 rounded" aria-labelledby="dropdownMenuLink">
            <ul>
                <li  class="dropdown-item" onClick="exibirTodos('todos')">Todos(12)</li>
                <li  class="dropdown-item" onClick="exibirCategoria('geladeira')">Geladeiras(3)</li>
                <li  class="dropdown-item" onClick="exibirCategoria('fogao')">Fogões(2)</li>
                <li  class="dropdown-item" onClick="exibirCategoria('microondas')">Microondas(3)</li>
                <li  class="dropdown-item" onClick="exibirCategoria('lavadoraDeRoupas')">Lavadora de Roupas(2)</li>
                <li  class="dropdown-item" onClick="exibirCategoria('lavaLoucas')">Lava Louças(2)</li>
            </ul>
          </div>
        </div>
        <BoxProdutos arrayProdutos={this.state.db} />
      </div>
    );
  }
}

class BoxProdutos extends React.Component {
  render(){
    return(
      <div class="row d-flex justify-content-between py-4">
        {this.props.arrayProdutos.map(
          row=>
          <div class="col-lg-3 col-md-4 col-xs-9 text-center" id="{row.categoria}">
            <img height="120" src={row.imagem} onClick="destaque(this)" />
            <p>{row.descricao}</p>
            <p>R${row.preco}</p>
            <p>R${row.precofinal}</p>
          </div>
        )}
      </div>
    );
  }
}


export default Produtos;