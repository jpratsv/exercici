import PropTypes from "prop-types";

export default function CalculaNumeros({ arrayNumeros }) {
  let suma = 0;
  let media = 0;
  let max = 0;
  let min = Infinity;
  let i = 0;

  console.log(arrayNumeros);

  for (i = 0; i < arrayNumeros.length; i++) {
    let elemento = +arrayNumeros[i]; // el + es lo mismo que Number(arrayNumeros[i])

    suma += elemento;

    if (max < elemento) max = elemento;

    if (min > elemento) min = elemento;
  }

  media = suma / arrayNumeros.length;

  return (
    <>
      <div>
        <h2>Suma: {suma}</h2>

        <h2>Media Aritmética: {media}</h2>

        <h2>Máximo valor: {max}</h2>

        <h2>Mínimo valor: {min}</h2>
      </div>
    </>
  );
}

CalculaNumeros.propTypes = {
  arrayNumeros: PropTypes.array,
};
