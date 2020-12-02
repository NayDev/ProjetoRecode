import React from 'react';
import './style.css';

const Footer = () => {
    return(
    <footer className="text-center p-4" id="rodape">
        <p><b>Formas de pagamento:</b></p>
        <img src="./img/pagamentos-bandeiras-01.png" alt="Formas de Pagamento" />
        <p>&copy; Recode Pro 2020</p>
    </footer>
    );
}

export default Footer;