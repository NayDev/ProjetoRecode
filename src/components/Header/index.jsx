import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-primary shadow p-3 mb-2">
        <Link class="navbar-brand text-white" to="/">Full Stack Eletro</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link class="nav-link text-white" to="/produtos">Nossos Produtos <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/lojas">Nossas Lojas</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/mensagens">Fale Conosco</Link>
              </li>
            </ul>
        </div>
      </nav>
    );
}

export default Header;