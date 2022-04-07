import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import DownloadingIcon from '@mui/icons-material/Downloading';
import Button from '@mui/material/Button';
import "../css/style.css";
import { converHTMLToPDF } from "../Pdf";

const ContentPdf = React.forwardRef((props, ref) => {
  const { contenido, firmas } = useContext(DataContext);
  return (
    <>
      <div id="pdf" className="pdf" ref={ref}>
        <div className="cuerpo">
          <h1>Acuerdo de Patas</h1>
          <div className="acuerdo" dangerouslySetInnerHTML={{ __html: contenido }} />
        </div>
        <div className="firmas">
          {
            firmas.map((frm) => (
              <div key={frm.url}>
                <img src={frm.url} alt={'alt'} width="90" />
                <p>{frm.nombre}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="boton">
        <Button
          onClick={() => {
            let cont = document.querySelector('#pdf');
            converHTMLToPDF(cont);
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




