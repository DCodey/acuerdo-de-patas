import React, { useState } from 'react'
// import Header from './components/Header'
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './App.css';
import HomePage from './components/HomePage';
function App() {
  // const html = `
  // <div id='target' classname='color-red' style={'color:red'}>
  //   hoola mundo
  // <div>`
  // const [contenido, setcontenido] = useState(html)
  return (
    <>
    <HomePage />
      {/* <Header contenido={contenido} />
      <CKEditor
        editor={ClassicEditor}
        data={html}
        onChange={(event, editor) => {
          const data = editor.getData();
          setcontenido(data,'target')
        }}
      /> */}

    </>
  );
}

export default App;
