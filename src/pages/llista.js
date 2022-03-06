import GaleriaFotos from './GaleriaFotos';
import Acordeon from './Acordeon';
import Comptador from './Comptador';
import ToggleButton from './ToggleButton';
import DisplayCalculadora from './DisplayCalculadora'
import Menu from './Menu.js'

const llista = [
{path: 'galeriaFotos', titol:'Galeria de Fotos', element: <GaleriaFotos/>},
{path: 'acordeon', titol:'Acordeón', element: <Acordeon/>},
{path: 'comptador', titol:'Contador', element: <Comptador/>},
{path: 'toggle-button', titol:'Toogle button', element: <ToggleButton/>},
{path: 'calculadora', titol:'Displaya Calculadora', element: <DisplayCalculadora/>},
{path: 'menu', titol:'Garaje', element: <Menu/>},

];
export default llista;