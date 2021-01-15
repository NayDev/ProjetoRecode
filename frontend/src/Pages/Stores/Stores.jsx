import { useState, useEffect } from "react";
import "./style.css";

export default function Lojas() {
  const [lojas, setLojas] = useState([]);

  useEffect(function () {
    async function getLojas() {
      const url = "http://localhost:3001/stores";
      const response = await fetch(url);
      const dados = await response.json();
      setLojas(dados);
    }
    getLojas();
  }, []);

  return (
    <>
      <h1 className="py-2">Nossas Lojas</h1>
      <div className="row d-flex justify-content-around">
        {lojas.map(function (row) {
          return (
            <div key={row.id_loja} id={row.id} className="col-lg-3 col-md-3 col-xs-6 text-center my-5 text-white text-center loj">
              <p>{row.cidade}</p>
              <p>{row.logradoro}</p>
              <p>Número {row.numero}</p>
              <p>{row.andar}º andar</p>
              <p>{row.bairro}</p>
              <p>{row.telefone}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
