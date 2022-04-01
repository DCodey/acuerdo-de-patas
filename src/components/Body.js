import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FirmaPatas from "./FirmaPatas";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import { ClassicEditor } from "@ckeditor/ckeditor5-build-classic";
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';



import FroalaEditor from 'react-froala-wysiwyg';
import { DataContext } from "../context/DataContext";

// Include special components if required.
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
// import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
// import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
// import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
// import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';

const Body = () => {
  const {setContenido} = useContext(DataContext)

  return (
    <div>
      <Typography component="div">
        <Box sx={{ fontWeight: "light", fontSize: 18, m: 3, ml: 10 }}>
          Comience a escribir su acuerdo de patas en la siguiente caja de texto:
        </Box>
      </Typography>

      <Box sx={{ mx: 25, my: 5 }}>
        <FroalaEditor 
          tag='textarea' 
          onModelChange={(info)=>{
            setContenido(info)
            console.log(info)
          }
          }
        />
      </Box>

      <FirmaPatas />
    </div>
  );
}

export default Body;
