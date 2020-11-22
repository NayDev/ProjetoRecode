import React from 'react';
import foot from '../document/img/pagamentos-bandeiras-01.png'
import './style.css';

const Footer = () => {
    return(
    <footer class="text-center p-4" id="rodape">
        <p><b>Formas de pagamento:</b></p>
        <img src={foot} alt="Formas de Pagamento" />
        <p>&copy; Recode Pro 2020</p>
    </footer>
    );
}

export default Footer;