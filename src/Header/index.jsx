import React from 'react';

import './style.css';

const Header = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-primary shadow p-3 mb-2">
        <a class="navbar-brand text-white" href="./index.php">Full Stack Eletro</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link text-white" href="./produtos.php">Nossos Produtos <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="./lojas.php">Nossas Lojas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="./fale_conosco.php">Fale Conosco</a>
              </li>
            </ul>
        </div>
      </nav>
    );
}

export default Header;