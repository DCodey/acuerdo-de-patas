import React, { useState } from 'react'
import FirmaPatas from './FirmaPatas'

const defaultValores = {
  valor: ""
};

export default function HomePage() {
  const [rows, setRows] = useState([defaultValores]);

  function Row({onRemove}) {
    return (
      <div>
        <FirmaPatas />
        <div>        
          <button onClick={onRemove}> eliminar </button>
        </div>
      </div>
    );
  }

  const handleOnChange = (index, name, value) => {
    const copyRows = [...rows];
    copyRows[index] = {
      ...copyRows[index],
      [name]: value
    };
    setRows(copyRows);
  };

  const handleOnAdd = () => {
    setRows(rows.concat(defaultValores));
  };

  const handleOnRemove = index => {
    const copyRows = [...rows];
    copyRows.splice(index, 1);
    setRows(copyRows);
  };


  return (
    <>
      <div>        
        {rows.map((row, index) => (
          <Row
            {...row}
            onChange={(name, value) => handleOnChange(index, name, value)}
            onRemove={() => handleOnRemove(index)}
            handleOnAdd={handleOnAdd}
            key={index}
          />           
        ))}
      </div>
      <br />
      <div style={{textAlign:'center'}}>

        <button onClick={handleOnAdd}>agregar</button>
      </div>
    </>
    
  )
}
