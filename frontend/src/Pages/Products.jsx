import { useState, useEffect } from "react";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);

  useEffect(function () {
    async function getProdutos() {
      const url = "http://localhost:3001/products";
      const response = await fetch(url);
      const dados = await response.json();
      setProdutos(dados);
    }
    getProdutos();
  }, []);

  function exibir_categorias(event) {
    const paraFiltrar = produtos
    setProdutosFiltrados( paraFiltrar.filter(item => {
      return item.id_categoria == event.target.id
    }))
   
  }
  let exibir_todos = () => {
    setProdutosFiltrados(produtos);
  };

  return (
    <>
      <div className="container">
        <div className="dropdown-show d-flex justify-content-center my-4">
          <a
            className="btn dropdown-toggle text-white d-flex align-items-center"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Categorias
          </a>
          <div>
            <ul
              className="dropdown-menu shadow"
              aria-labelledby="dropdownMenuLink"
            >
              <li className="dropdown-item" onClick={exibir_todos}>
                Todos(12)
              </li>
              <li className="dropdown-item" id="1" onClick={exibir_categorias}>
                Geladeiras(3)
              </li>
              <li className="dropdown-item" id="2" onClick={exibir_categorias}>
                Fogões(2)
              </li>
              <li className="dropdown-item" id="3" onClick={exibir_categorias}>
                Microondas(3)
              </li>
              <li className="dropdown-item" id="4" onClick={exibir_categorias}>
                Lavadora de Roupas(2)
              </li>
              <li className="dropdown-item" id="5" onClick={exibir_categorias}>
                Lava Louças(2)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-between py-4">
        {produtosFiltrados.map(function (produto) {
          return (
            <div
              key={produto.id}
              id={produto.id}
              className="col-lg-4 col-md-3 col-xs-9 text-center Conteiner"
              id={produto.id_categoria}
            >
              <img width="150px" src={produto.imagem} id={produto.id_produto} />
              <p>{produto.descricao}</p>
              <p>
                R$:
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
