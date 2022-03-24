import React, { useState } from 'react'
// import Header from './components/Header'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  // const html = `
  // <div id='target' classname='color-red' style={'color:red'}>
  //   hoola mundo
  // <div>`
  const [contenido, setcontenido] = useState('')
  return (
    <>
    <HomePage />
      {/* <Header contenido={contenido} />
      <CKEditor
        editor={ClassicEditor}
        data={contenido}
        onChange={(event, editor) => {
          const data = editor.getData();
          setcontenido(data)
        }}
      /> */}
    {/* <Header /> */}
    <Body/>
    <Footer />
    </>    
  );
}

export default App;
