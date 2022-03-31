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
  contenido: '',
  firmas : [
    {firma:'../imagenes/conejo.png',
    nombre_firma: 'Jiancarlos',
    },
    {firma:'../imagenes/mono.png',
    nombre_firma: 'Jairo',
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
  // const [data, setdata] = useState(datainitial)
  const [contenido, setcontenido] = useState(datainitial.contenido)
  const [item, setitem] = useState(itemData)
  return (
    // <DataContext.Provider value={{data, setdata, item, itemData}}>
    <DataContext.Provider value={{contenido, setcontenido, item, itemData}}>
      {children}
    </DataContext.Provider>
  )
}
