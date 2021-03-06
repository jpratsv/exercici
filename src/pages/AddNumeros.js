import React, { useState } from "react";
import PropTypes from "prop-types";

export default function AddNumeros({ setArrayNumeros }) {
  const [inputValue, setInputValue] = useState(""); 

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    if (inputValue.trim().length > 0) {
      if (Number(inputValue.trim())) {
        setArrayNumeros((cats) => [...cats, inputValue]);
        setInputValue("");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="num" value={inputValue} onChange={handleInputChange} />
    </form>
  );
}

AddNumeros.propTypes = {
  setArrayNumeros: PropTypes.func.isRequired,
};
