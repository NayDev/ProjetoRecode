import { useState, useEffect } from "react";


export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  
  useEffect(function () {
    async function getProdutos() {
      const url = "http://localhost/Projeto-React/backend/ClassProdutos.php";
      const response = await fetch(url);
      const dados = await response.json();
      setProdutos(dados);
    }
    getProdutos();
  }, []);

  let produt = document.getElementsByClassName('prod');

  const exibir = (event) => {
    let item = event.target.id;
    for (let i = 0; i < produt.length; i++) {
        if (item === produt[i].id) {
            produt[i].style.display = "inline-block";
        } else {
            produt[i].style.display = "none";
        }
    }
}

  return (
    <>
      <div className="container">
        <div className="dropdown-show d-flex justify-content-center my-4">
          <a className="btn dropdown-toggle text-white d-flex align-items-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categorias
          </a>
          <div className="prod " onClick={exibir} id="id_categoria">
            <ul  className="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">Todos(12)</li>
              <li  className="dropdown-item" id="1">Geladeiras(3)</li>
              <li  className="dropdown-item" id="2">Fogões(2)</li>
              <li  className="dropdown-item" id="3">Microondas(3)</li>
              <li  className="dropdown-item" id="4">Lavadora de Roupas(2)</li>
              <li  className="dropdown-item" id="5">Lava Louças(2)</li>
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
              className="col-lg-4 col-md-3 col-xs-9 text-center"  id={produto.id_categoria} 
            >
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
