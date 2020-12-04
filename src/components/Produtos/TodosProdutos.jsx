/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export default class TodosProdutos extends React.Component {


 
      destaque = (event) => {

        let tam = event.target.style.width

        if(tam === "200px"){
          event.target.style = "width: 150px"
        }else{
          event.target.style = "width: 200px"
        }

      }
   
    
    render(){
      return(
        <div className="row d-flex justify-content-between py-4">
          {this.props.arrayProdutos.map(
            row=>
            
            <div  className="box_produto col-lg-4 col-md-3 col-xs-9 text-center" id={row.id_categoria}>
              <img width="150px" src={row.imagem} onMouseOut={this.destaque} onMouseOver={this.destaque} id={row.id_produto}/>
             
              <p>{row.descricao}</p>
              <p><s>R${row.preco}</s></p>
              <p className="text-danger h4 p-2">R${row.precofinal}</p>            
            </div>
          )}
        </div>
      );
    }
    
  }