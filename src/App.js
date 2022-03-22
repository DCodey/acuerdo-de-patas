import React, { useState } from 'react'
import Header from './components/Header'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function App() {
  const [contenido, setcontenido] = useState('')
  return (
    <>
      <Header contenido={contenido} />
      <CKEditor
        editor={ClassicEditor}
        data={contenido}
        onChange={(event, editor) => {
          const data = editor.getData();
          setcontenido(data)
        }}
      />

    </>
  );
}

export default App;
