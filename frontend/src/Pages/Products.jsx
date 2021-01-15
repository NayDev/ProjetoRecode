import { useState, useEffect } from "react";


export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  
  
  useEffect(function () {
    async function getProdutos() {
      const url = "http://localhost:3001/products";
      const response = await fetch(url);
      const dados = await response.json();
      setProdutos(dados);
    }
    getProdutos();
  }, []);

    function exibir_categorias(event){
      let elementos = document.getElementsByClassName('Conteiner');
      for(var i = 0; i < elementos.length; i++){
          if(event == elementos[i].id){
              elementos[i].style = "display:inline-block"
          }else{
              elementos[i].style = "display:none"
          }
      }
  }
  let exibir_todos = () => {
      let elementos = document.getElementsByClassName('Conteiner');
      for(var i = 0; i < elementos.length; i++){
          elementos[i].style = "display:inline-block"
      }       
  }


  return (
    <>
      <div className="container" >
        <div className="dropdown-show d-flex justify-content-center my-4">
          <a className="btn dropdown-toggle text-white d-flex align-items-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categorias
          </a>
          <div   >
            <ul  className="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item" onClick={() => exibir_todos('Todos')}>Todos(12)</li>
              <li  className="dropdown-item" id="1" onClick={() => exibir_categorias('geladeira')} >Geladeiras(3)</li>
              <li  className="dropdown-item" id="2" onClick={() => exibir_categorias('fogao')} >Fogões(2)</li>
              <li  className="dropdown-item" id="3" onClick={() => exibir_categorias('microondas')}>Microondas(3)</li>
              <li  className="dropdown-item" id="4" onClick={() => exibir_categorias('lavadoraDeRoupas')} >Lavadora de Roupas(2)</li>
              <li  className="dropdown-item" id="5" onClick={() => exibir_categorias('lavaLoucas')} >Lava Louças(2)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-between py-4" >
        {produtos.map(function (produto) {
          return (
            <div
              key={produto.id}
              id={produto.id}
              className="col-lg-4 col-md-3 col-xs-9 text-center Conteiner"  id={produto.id_categoria}  >
              <img width="150px" src={produto.imagem} id={produto.id_produto} />
              <p>{produto.descricao}</p>
              <p>R$:
                <s>{produto.preco}</s>
              </p>
              <p className="text-danger h4 p-2">R$: {produto.precofinal}</p>
            </div>
          );
        })}
      </div>
    </>
  );
  
}
