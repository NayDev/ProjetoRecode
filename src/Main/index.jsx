import React from 'react';



//import './style.css';

const Main = () => {
    return(

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
                            <img src="./img/car1.jpg" class="d-block w-50 rounded fot" alt="Img1" />
                        </div>
                        <div class="carousel-item">
                            <img  src="./img/car2.jpg" class="d-block w-50 rounded fot" alt="Img2" />
                        </div>
                        <div class="carousel-item">
                            <img src="./img/car3.jpg" class="d-block w-50 rounded fot" alt="Img3" />
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
    );
}

export default Main;