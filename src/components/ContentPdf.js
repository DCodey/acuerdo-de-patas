import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext';

export default function ContentPdf() {
  const { data } = useContext(DataContext)
  return (
    <>
      <div id="pdf" class="pdf">

        <div class="acuerdo">
          <h1>HOla mundo</h1>
          <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).</p>
        </div>
        <div class="firmas">
          <div class="firma1">
            <img src="./images/gato.png"></img>
            <p>Firma 1</p>
          </div>
          <div>
            <img src="./images/gato.png"></img>
            <p>Firma 2</p>
          </div>


        </div>
      </div>

    </>
  );
}