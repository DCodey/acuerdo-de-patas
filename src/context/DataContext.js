import React, {createContext, useState} from 'react';

export const DataContext = createContext();

const datainitial = {
  contenido: 'el contenido de la caja',
  firmas : 'aqui ira las firmas y nombre'
}

export const DataProvider = ({children})=> {
  const [data, setdata] = useState(datainitial)
  return (
    <DataContext.Provider value={{data, setdata}}>
      {children}
    </DataContext.Provider>
  )
}
