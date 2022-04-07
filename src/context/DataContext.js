import React, {createContext, useState} from 'react';
import conejo from "../components/images/conejo.png";
import elefante from "../components/images/elefante.png";
import gato from "../components/images/gato.png";
import leon from "../components/images/leon.png";
import oso from "../components/images/oso.png";
import patos from "../components/images/patos.png";
import perro from "../components/images/perro.png";
import tigre from "../components/images/tigre.png";
import mono from "../components/images/mono.png";

export const DataContext = createContext();

const datainitial = {
  contenido: 'content initial',
  firmas : [
    {url:'/static/media/conejo.89ceef0fb72ce06715d5.png',
    nombre: 'name 1',
    },
    {url:'/static/media/mono.fe8ca3c4df3bb835c5b2.png',
    nombre: 'name 2',
    },
    {url:'/static/media/perro.c75ac64f88a772713338.png',
    nombre: 'name 3',
    }
  ]
}
const itemData = [
  {
    img: conejo,
    title: "Conejo",
    desc: "Conejo",
  },
  {
    img: elefante,
    title: "Elefante",
    desc: "Elefante",
  },
  {
    img: gato,
    title: "Gato",
    desc: "Gato",
  },
  {
    img: leon,
    title: "Leon",
    desc: "Leon",
  },
  {
    img: oso,
    title: "Oso",
    desc: "Oso",
  },
  {
    img: patos,
    title: "Pato",
    desc: "Pato",
  },
  {
    img: perro,
    title: "Perro",
    desc: "Perro",
  },
  {
    img: tigre,
    title: "Tigre",
    desc: "Tigre",
  },
  {
    img: mono,
    title: "Mono",
    desc: "Mono",
  },
];

export const DataProvider = ({children})=> {
  const [contenido, setContenido] = useState(datainitial.contenido)
  const [firmas, setFirmas] = useState(datainitial.firmas)
  const [firma, setFirma ] = useState(datainitial.firmas)
  const [nombre_firma, setNombre_firma] = useState(datainitial.firmas)
  const [items, setItems] = useState(itemData)
  const datos = {
    contenido,
    setContenido,
    firmas,
    setFirmas,
    firma,
    setFirma,
    nombre_firma,
    setNombre_firma,
    items,
    setItems,
  }
  return (
    <DataContext.Provider value={datos}>
    {/* <DataContext.Provider value={{contenido, setcontenido, item, itemData}}> */}
      {children}
    </DataContext.Provider>
  )
}


