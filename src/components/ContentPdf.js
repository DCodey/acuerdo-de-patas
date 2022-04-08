import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import DownloadingIcon from "@mui/icons-material/Downloading";
import Button from "@mui/material/Button";
import "../css/style.css";
import { Tooltip } from "@mui/material";
import { converHTMLToPDF } from "../Pdf";
import { blueGrey } from "@mui/material/colors";

const ContentPdf = React.forwardRef((props, ref) => {
  const { contenido, firmas } = useContext(DataContext);
  const fecha = new Date();
  const meses = new Array(
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  );
  const dia = `${fecha.getDate()}`;
  const mes = `${meses[fecha.getMonth()]}`;
  const anio = `${fecha.getFullYear()}`;

  return (
    <>
      <div id="pdf" className="pdf" ref={ref}>
        <div className="cuerpo">
          <h1>Acuerdo de patas</h1>
          <div
            className="acuerdo"
            dangerouslySetInnerHTML={{ __html: contenido }}
          />
          <p className="fechafirma">
            {dia} de {mes} del {anio}
          </p>
        </div>
        <div className="firmas">
          {firmas.map((frm) => (
            <div key={frm.url}>
              <img src={frm.url} alt={"alt"} width="90" />
              <p className="nombrefirma">{frm.nombre}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="boton">
        <Tooltip title="Descargar">
          <Button
            onClick={() => {
              let cont = document.querySelector("#pdf");
              converHTMLToPDF(cont);
            }}
            variant="contained"
            sx={{
              color: blueGrey[50],
              backgroundColor: blueGrey[800],
              ":hover": { backgroundColor: blueGrey[900] },
            }}
            startIcon={<DownloadingIcon />}
          >
            Descargar PDF
          </Button>
        </Tooltip>
      </div>
    </>
  );
});

export default ContentPdf;
