import React, { useState } from "react";
import AddNumeros from "./AddNumeros";
import CalculaNumeros from "./CalculaNumeros";

export default function  EntraArray ()  {
  const [arrayNumeros, setArrayNumeros] = useState([]);

  return (
    <>
      <h2>Entrada de los elementos del Array</h2>
      <AddNumeros setArrayNumeros={setArrayNumeros} />
      <CalculaNumeros arrayNumeros={arrayNumeros} />
      <hr />
      <ol>
        {arrayNumeros.map((num) =>
          num > 0 ? (
            <li key={num}> {num}</li>
          ) : (
            <li> {num} "--------------------"</li>
          )
        )}
      </ol>
    </>
  );
};
