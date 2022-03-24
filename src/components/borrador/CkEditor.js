import React from 'react'

export default function CkEditor() {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={contenido}
        onChange={(event, editor) => {
          const data = editor.getData();
          setcontenido(data)
        }}
      />
    </>
  )
}
