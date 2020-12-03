import React from 'react';

export default class TodosProdutos extends React.Component {
    constructor(props){
      super(props);
      
    }
  

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

      destaque = (event) => {

        let tam = event.target.style.height

        if(tam == "200px"){
          event.target.style = "height: 150px"
        }else{
          event.target.style = "height: 200px"
        }

      }
   
    
    render(){
      return(
        <div className="row d-flex justify-content-between py-4">
          {this.props.arrayProdutos.map(
            row=>
            
            <div id={row.categoria}  className="box_produto col-lg-4 col-md-3 col-xs-9 text-center" >
              <img src={row.imagem} onMouseOut={this.destaque} onMouseOver={this.destaque} id={row.id_produto}/>
             
              <p>{row.descricao}</p>
              <p><s>R${row.preco}</s></p>
              <p className="text-danger h4 p-2">R${row.precofinal}</p>            
            </div>
          )}
        </div>
      );
    }
    
  }