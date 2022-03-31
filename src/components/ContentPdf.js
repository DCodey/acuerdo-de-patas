import React from "react";
// import { DataContext } from "../context/DataContext";
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
};

const ContentPdf = React.forwardRef((props, ref) => {
  // const { data } = useContext(DataContext);
  return (
    <>
      <div sx={style} id="pdf" className="pdf">
        <div className="acuerdo">
          <h1>Hola mundo</h1>
          <p>
            Es un hecho establecido hace demasiado tiempo que un lector se
            distraerá con el contenido del texto de un sitio mientras que mira
            su diseño. El punto de usar Lorem Ipsum es que tiene una
            distribución más o menos normal de las letras, al contrario de usar
            textos como por ejemplo "Contenido aquí, contenido aquí". Estos
            textos hacen parecerlo un español que se puede leer. Muchos paquetes
            de autoedición y editores de páginas web usan el Lorem Ipsum como su
            texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar
            por resultado muchos sitios web que usan este texto si se encuentran
            en estado de desarrollo. Muchas versiones han evolucionado a través
            de los años, algunas veces por accidente, otras veces a propósito
            (por ejemplo insertándole humor y cosas por el estilo).
            Es un hecho establecido hace demasiado tiempo que un lector se
            distraerá con el contenido del texto de un sitio mientras que mira
            su diseño. El punto de usar Lorem Ipsum es que tiene una
            distribución más o menos normal de las letras, al contrario de usar
            textos como por ejemplo "Contenido aquí, contenido aquí". Estos
            textos hacen parecerlo un español que se puede leer. Muchos paquetes
            de autoedición y editores de páginas web usan el Lorem Ipsum como su
            texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar
            por resultado muchos sitios web que usan este texto si se encuentran
            en estado de desarrollo. Muchas versiones han evolucionado a través
            de los años, algunas veces por accidente, otras veces a propósito
            (por ejemplo insertándole humor y cosas por el estilo).
            Es un hecho establecido hace demasiado tiempo que un lector se
            distraerá con el contenido del texto de un sitio mientras que mira
            su diseño. El punto de usar Lorem Ipsum es que tiene una
            distribución más o menos normal de las letras, al contrario de usar
            textos como por ejemplo "Contenido aquí, contenido aquí". Estos
            textos hacen parecerlo un español que se puede leer. Muchos paquetes
            de autoedición y editores de páginas web usan el Lorem Ipsum como su
            texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar
            por resultado muchos sitios web que usan este texto si se encuentran
            en estado de desarrollo. Muchas versiones han evolucionado a través
            de los años, algunas veces por accidente, otras veces a propósito
            (por ejemplo insertándole humor y cosas por el estilo).
          </p>
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
        <div className="boton">
          <Button variant="contained" color="secondary" startIcon={<DownloadingIcon/>}>
            Descargar PDF
          </Button>
        </div>
      </div>
    </>
  );
});

export default ContentPdf;