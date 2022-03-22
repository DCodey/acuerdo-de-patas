import React, { useState } from 'react'
import Header from './Header'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function HomePage() {
  const [contenido, setcontenido] = useState('')  
  return (
    <>
      <Header contenido={contenido} />
      <CKEditor
          editor={ClassicEditor}
          data={contenido}
          onChange = {(event, editor) => {
            const data = editor.getData();
            setcontenido(data)
          }}
      />
      
    </>
    
  )
}
