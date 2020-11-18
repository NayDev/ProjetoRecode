import React from 'react';
import foot from '../document/img/pagamentos-bandeiras-01.png'
import './style.css';

const Footer = () => {
    return(
    <footer class="text-center" id="rodape">
        <p id="formas_pagamento">Formas de pagamento:</p>
        <img src={foot} alt="Formas de Pagamento" />
        <p>&copy; Recode Pro 2020</p>
    </footer>
    );
}

export default Footer;