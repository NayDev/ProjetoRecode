import React from 'react';
import img1 from '../document/img/whatsapp.png';
import img2 from '../document/img/email.png';
import './style.css';

const Contatos = () => {
    return(
        <>
      <div class="container d-flex justify-content-between">
        <div>
          <img class="my-3 fot1" src={img1}/>
            <p>contato@fullstackeletro.com</p>
        </div>
        <div>
        <img class="my-3 fot2" src={img2}/>
            <p>(11) 99999-99999</p>
        </div>
      </div>
    
      <form class="container" method="post">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input type="text" name="nome" class="form-control" id="nome" aria-describedby="nome" placeholder="Digite seu nome" />
        </div>
        <div class="form-group">
          <label for="msg">Mensagem</label>
          <textarea type="password" name="msg" class="form-control" id="msg" placeholder="Digite sua Mensagem"></textarea>
        </div>
          <button type="submit" name="submit"  value="Enviar" class="btn btn-primary">Enviar</button>
      </form>
      <h2 class="mt-4 text-center">Lista de Mensagem</h2>
        <table class=" container table">
          <thead class="table-dark">
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Nome</th>
              <th scope="col">Mensagem</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                    <th scope="row"></th>
                    <td scope="row"></td>
                    <td scope="row"></td>
            </tr>
            </tbody>
        </table>
        </>
    );
}

export default Contatos;