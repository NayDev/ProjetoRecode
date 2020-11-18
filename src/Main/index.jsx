import React from 'react';
import img1 from '../document/img/car1.jpg';
import img2 from '../document/img/car2.jpg';
import img3 from '../document/img/car3.jpg';
import Header from '../Header/index';
import Footer from '../Footer/index';
import './style.css';

const Main = () => {
    return(
        <>
        <Header />
        <div class="container-fluid">
            <h1 class="mt-4" id="msg_abertura"></h1>
            <p class="mt-2"> Aqui em nossa loja,<em>Programadores tem desconto!</em>nos produtos para sua casa!</p>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel"> 
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={img1} class="d-block w-100 rounded" alt="Geladeira" />
                        </div>
                        <div class="carousel-item">
                            <img  src={img2} class="d-block w-100 rounded" alt="Fogão" />
                        </div>
                        <div class="carousel-item">
                            <img src={img3} class="d-block w-100 rounded" alt="Programador" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
        <Footer />,
        </>
    );
}

export default Main;