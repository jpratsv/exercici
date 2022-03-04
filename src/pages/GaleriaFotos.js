// 1.Donat un array amb URL de fotos, mostrar les fotos en graella
// 2.En clicar un foto, mostrar-la en pantalla completa (avançat)
// 3.En clicar la foto ampliada, mostrar la graella un altre cop

import "./GaleriaFotos.css";
import { useState } from "react";

export default function GaleriaFotos() {
  const [indexFotoActual, setIndexFotoActual] = useState(0);

  const visualiza = (foto) => setIndexFotoActual(foto);

  if (indexFotoActual) {
    return (
      <img
        id="ampliada"
        src={process.env.PUBLIC_URL + "/img/" + indexFotoActual + ".jpg"}
        onClick={() => visualiza(0)}
        alt="Imagen Actual"
      ></img>
    );
  }
  return (
    <>
      <body class="Galeria">
        <div class="general">
          <header>
            <h1>Práctica Galeria de fotografias</h1>
          </header>
          <main class="detalle">
            <img
              onClick={() => visualiza(1)}
              src={process.env.PUBLIC_URL + "/img/1.jpg"}
              alt="Imagen 1"
            ></img>
            <img
              onClick={() => visualiza(2)}
              src={process.env.PUBLIC_URL + "/img/2.jpg"}
              alt="Imagen 2"
            ></img>
            <img
              onClick={() => visualiza(3)}
              src={process.env.PUBLIC_URL + "/img/3.jpg"}
              alt="Imagen 3"
            ></img>
            <img
              onClick={() => visualiza(4)}
              src={process.env.PUBLIC_URL + "/img/4.jpg"}
              alt="Imagen 4"
            ></img>
            <img
              onClick={() => visualiza(5)}
              src={process.env.PUBLIC_URL + "/img/5.jpg"}
              alt="Imagen 5"
            ></img>
          </main>
        </div>
      </body>

      <footer>
        <p>Final</p>
      </footer>
    </>
  );
}
