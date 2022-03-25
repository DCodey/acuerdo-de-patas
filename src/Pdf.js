import { jsPDF } from "jspdf";
import { DataContext } from './context/DataContext';
import { useContext } from "react";

// const doc = new jsPDF("p","pt","a4");

const downloadPdf=(id="content")=>{
  // doc.html(contenido, {
    const doc = new jsPDF("p","pt","a4");
    doc.html(document.querySelector(id), {
    callback: function () {
      doc.save("a4.pdf");
    }
  })
  console.log('descargando pdf')
}
const viewPdf = ()=>{  
  {console.log('vista previa del pdf')}
}

export const Pdf = ()=>{
  const {data} = useContext(DataContext)

  {console.log('ingreseee')}
  {downloadPdf()}
}