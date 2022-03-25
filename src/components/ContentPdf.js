import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext';

export default function ContentPdf() {
  const {data} = useContext(DataContext)
  return (
    <>
      {/* <div>{ JSON.stringify(data, null, 2)}</div> */}
      <div>{ data.contenido }</div>
      
    </>    
  );
}