import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import DownloadingIcon from '@mui/icons-material/Downloading';
import Button from '@mui/material/Button';
import "../css/style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
};

const ContentPdf = React.forwardRef((props, ref) => {
  const { contenido } = useContext(DataContext);

  return (
    <>
      <div sx={style} id="pdf" className="pdf">

        <div class="cuerpo">
          <h1>Acuerdo de Patas</h1>
          <div className="acuerdo" dangerouslySetInnerHTML={{ __html: contenido }} />
        </div>
        <div className="firmas">
          <div className="firma1">
            <img src="./images/gato.png" alt="gato"></img>
            <p>Firma 1</p>
          </div>
          <div>
            <img src="./images/gato.png" alt="gato1"></img>
            <p>Firma 2</p>
          </div>
        </div>
      </div>
      <div className="boton">
        <Button variant="contained" color="secondary" startIcon={<DownloadingIcon />}>
          Descargar PDF
        </Button>
      </div>
    </>
  );
});

export default ContentPdf;




