import React, { useState } from 'react'
import { jsPDF } from "jspdf";
// import FirmaPatas from './FirmaPatas'
import './../App.css'

const doc = new jsPDF("p","pt","a4");

const imprimir = ()=>{
  doc.html(document.querySelector('#content'),{
    callback: function(){
      doc.save("a4.pdf");  
    }
  })
}

const defaultValores = {
  valor: ""
};

export default function HomePage() {
  // const [rows, setRows] = useState([defaultValores]);

  // function Row({onRemove}) {
  //   return (
  //     <div>
  //       <FirmaPatas />
  //       <div>        
  //         <button onClick={onRemove}> eliminar </button>
  //       </div>
  //     </div>
  //   );
  // }

  // const handleOnChange = (index, name, value) => {
  //   const copyRows = [...rows];
  //   copyRows[index] = {
  //     ...copyRows[index],
  //     [name]: value
  //   };
  //   setRows(copyRows);
  // };

  // const handleOnAdd = () => {
  //   setRows(rows.concat(defaultValores));
  // };

  // const handleOnRemove = index => {
  //   const copyRows = [...rows];
  //   copyRows.splice(index, 1);
  //   setRows(copyRows);
  // };

  return (
    <>
    <div id="content" className='container'>
      <h1 className='text-center color-red'>Acuerdo de Patas</h1>
      <div className='color-red'>
        holas :D
      </div>
      <div> 
        <div>
          <img src='https://picsum.photos/200' />
        </div>       
        {/* {rows.map((row, index) => (
          <Row
            {...row}
            onChange={(name, value) => handleOnChange(index, name, value)}
            onRemove={() => handleOnRemove(index)}
            handleOnAdd={handleOnAdd}
            key={index}
          />           
        ))} */}
      </div>
      <br />
    </div>
    <button onClick={()=>{imprimir()}}>imprimir</button>
    </>
    
  )
}
