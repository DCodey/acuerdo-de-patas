import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import DownloadingIcon from '@mui/icons-material/Downloading';
import Button from '@mui/material/Button';
import "../css/style.css";
import jsPDF from "jspdf";
import { PdfDownload } from "../Pdf";
import gato from "./images/gato.png";

const ContentPdf = React.forwardRef((props, ref) => {
  const { contenido } = useContext(DataContext);
  const [cont, setCont] = useState('');
  return (
    <>
      <div id="pdf" className="pdf" ref={ref}>
        <div className="cuerpo">
          <h1>Acuerdo de Patas</h1>
          <div className="acuerdo" dangerouslySetInnerHTML={{ __html: contenido }} />
        </div>
        <div className="firmas">
          <div className="firma1">
            <img src={gato} alt="gato" width="90"></img>
            <p>Firma 1</p>
          </div>
          <div>
            <img src={gato} alt="gato1" width="90"></img>
            <p>Firma 2</p>
          </div>
        </div>
      </div>
      <div className="boton">        
        <Button           
          onClick={()=>{
            setCont(document.querySelector('#pdf'));    
            PdfDownload(cont);
          }} 
          variant="contained" 
          color="secondary" 
          startIcon={<DownloadingIcon />}>
          Descargar PDF
        </Button>
      </div>
    </>
  );
});

export default ContentPdf;




