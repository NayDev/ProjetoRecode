import React from 'react';
//import './style.css';

const Produtos = () => {
    return(
        <div class=" container-fluid">
            <div class="dropdown d-flex justify-content-center p-5">
                <a class="btn text-white dropdown-toggle " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
                </a>
                <div class="dropdown-menu border-0 rounded" aria-labelledby="dropdownMenuLink">
                <ul>
                    <li  class="dropdown-item" onclick="exibirTodos('todos')">Todos(12)</li>
                    <li  class="dropdown-item" onclick="exibirCategoria('geladeira')">Geladeiras(3)</li>
                    <li  class="dropdown-item" onclick="exibirCategoria('fogao')">Fogões(2)</li>
                    <li  class="dropdown-item" onclick="exibirCategoria('microondas')">Microondas(3)</li>
                    <li  class="dropdown-item" onclick="exibirCategoria('lavadoraDeRoupas')">Lavadora de Roupas(2)</li>
                    <li  class="dropdown-item" onclick="exibirCategoria('lavaLoucas')">Lava Louças(2)</li>
                </ul>
                </div>
            </div>
            <section class="row d-flex justify-content-center mx-1">
       
            <div class="box_produto col-lg-3 col-md-4 col-sm-6 mx-auto">
              <div class="box_img">
                <img width="150px" onclick="destaque(this)" />
              </div>
              <br/>
              <p class="descricao"></p>
              <hr/>
              <p class="antigo"></p>
              <p class="preco"></p>
            </div>
    </section>
  </div>
       
    );
}

export default Produtos;