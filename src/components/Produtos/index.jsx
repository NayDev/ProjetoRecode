import React, { useState } from 'react';

import './style.css';


class Produtos extends React.Component {

  constructor(){
    super();
    this.state=({
      db:[]
    });
    this.exibirProdutos();
  }

  exibirProdutos(){
    fetch("http://localhost/fullstack/src/backend/ClassProdutos.php")
    .then((response) => response.json())
    .then((responseJson)=>{
      this.setState({
        db: responseJson
      });
      
    });
    
  }

  //----Evento clique

  exibirTodos = () => {
    let elementos = document.getElementsByClassName('box_produto');

    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style = "display:block";
    }
  }
  exibirCategoria = (row) => {
    let elementos = document.querySelector(.box_produto);
    console.log(elementos);
    for (var i = 0; i < elementos.length; i++) {
        console.log(elementos[i]);
        if (row == elementos[i].id) {
            elementos[i].style = "display:block";
        } else {
            elementos[i].style = "display:none";
        }

    }
  }

  render(){
    return(
      <div className=" container-fluid">
        <div className="dropdown d-flex justify-content-center p-5">
          <a className="btn text-white dropdown-toggle " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorias
          </a>
          <div className="dropdown-menu border-0 rounded" aria-labelledby="dropdownMenuLink">
            <ul>
                <li  className="dropdown-item" onClick={() => this.exibirTodos('todos')}>Todos(12)</li>
                <li  className="dropdown-item" onClick={() => this.exibirCategoria('geladeira')}>Geladeiras(3)</li>
                <li  className="dropdown-item" onClick={() => this.exibirCategoria('fogao')}>Fogões(2)</li>
                <li  className="dropdown-item" onClick={() => this.exibirCategoria('microondas')}>Microondas(3)</li>
                <li  className="dropdown-item" onClick={() => this.exibirCategoria('lavadoraDeRoupas')}>Lavadora de Roupas(2)</li>
                <li  className="dropdown-item" onClick={() => this.exibirCategoria('lavaLoucas')}>Lava Louças(2)</li>
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
    
      <div className="row d-flex justify-content-between py-4">
        {this.props.arrayProdutos.map(
          row=>
          <div className="box_produto col-lg-4 col-md-3 col-xs-9 text-center" >
            <img className="p-4 w-50" src={row.imagem} />
            
            <p>{row.descricao}</p>
            <p><s>R${row.preco}</s></p>
            <p className="text-danger h4 p-2">R${row.precofinal}</p>
           
            
          </div>
        )}
      </div>
    );
  }
  
}

export default Produtos;