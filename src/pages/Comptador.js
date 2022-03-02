import "./comptador.css";
import { useState } from "react";

// Counter.js
export default function Comptador() {
    const [lista, setDisplai] = useState(0);
    const pulsa = (pul) => {
      switch (pul) {
        case "+":
          if (lista < 10) setDisplai(lista + 1);
          break;
        case "-":
          if (lista > 0) setDisplai(lista - 1);
          break;
        case "5":
          if (lista <= 5) setDisplai(lista + 5);
          break;
        default:
      }
    };
  
    return (
      <div className="display">
        <>
          <table id="segunda">
            <tr>
              <td colspan="3">{lista}</td>
            </tr>
  
            <tr>
              <td onClick={() => pulsa("+")}>+ 1</td>
              <td onClick={() => pulsa("-")}>- 1</td>
            </tr>
            <tr>
              <td colspan="3" onClick={() => pulsa("5")}>
                +5
              </td>
            </tr>
          </table>
        </>
      </div>
    );
  }
  