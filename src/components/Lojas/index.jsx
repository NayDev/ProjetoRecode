import React from 'react';
import './style.css';

class Lojas extends React.Component {

  constructor(){
    super();
    this.state=({
      db:[]
    });
    this.exibirLojas();
  }

  exibirLojas(){
    fetch("http://localhost/fullstack/src/backend/ClassLojas.php")
    .then((response) => response.json())
    .then((responseJson)=>{
      this.setState({
        db: responseJson
      });
      
    });
    
  }
  

  render(){
    return(
      <div className=" container-fluid">
        <BoxLojas arrayLojas={this.state.db} />
      </div>
    );
  }
}

class BoxLojas extends React.Component {
  render(){
    return(
      <>
      <h1 className="py-2">Nossas Lojas</h1>
      <div className="row d-flex justify-content-between py-2 ">
        
        
        {this.props.arrayLojas.map(
          row=>
         
          <div className="col-lg-3 col-md-4 col-xs-9 my-5 text-white loj">
            
            <p>{row.cidade}</p>
            <p>{row.logradoro}</p>
            <p>Número {row.numero}</p>
            <p>{row.andar}º andar</p>
            <p>{row.bairro}</p>
            <p>{row.telefone}</p>
          </div>
        )}
      </div>
      </>
    );
  }
}


export default Lojas;