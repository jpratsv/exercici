// 1.Mostrar 1 botó
// 2.En prémer el botó, canviar el color del botó
// 3.En prémer de nou el botó, treure el color del botó
// 4.Següents clics repliquen 2,3,2,3,2,3...
// Mostrar un text a sota dient si està premut o no


import {useState} from 'react'

export default function  ToggleButton() {
    const [color, setColor] = useState("red");
    const estaPremut = color !== "red";

    const toggle = () =>{
        if (color === "red") 
            setColor("cyan");
        else setColor("red");

    } 




    return (
    <>
        <button 
            style={{background:color}} 
            onClick={toggle}>Toggle Me
        </button>
        {estaPremut ? <p> Esta Premut</p> :  <p>No esta Premut</p>}
    
    
    </>
  )
}


