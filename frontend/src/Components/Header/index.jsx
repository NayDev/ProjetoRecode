import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow p-3 mb-2">
        <Link className="navbar-brand text-white" to="/">Full Stack Eletro</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/products">Nossos Produtos <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/stores">Nossas Lojas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/posts">Fale Conosco</Link>
              </li>
            </ul>
        </div>
      </nav>
    );
}

export default Header;