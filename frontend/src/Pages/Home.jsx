import React from 'react';


export default function Home () {
   
    return(

        <div className="container-fluid">
            <h1 className="mt-4" id="msg_abertura"></h1>
            <p className="mt-2"> Aqui em nossa loja,<em>Programadores tem desconto!</em>nos produtos para sua casa!</p>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"> 
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./img/car1.jpg" className="d-block w-100 rounded fot" alt="Img1" />
                        </div>
                        <div className="carousel-item">
                            <img  src="./img/car2.jpg" className="d-block w-100 rounded fot" alt="Img2" />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/car3.jpg" className="d-block w-100 rounded fot" alt="Img3" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
        
    );
   
}
