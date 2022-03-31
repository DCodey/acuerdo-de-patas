import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Modal from "@mui/material/Modal";
import ModalPatas from "./ModalPatas";
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ref = React.createRef();
  // const [data, setdata] = useState('ñam ñam')

  const {setcontenido} = useContext(DataContext)

  return (
    <div>
      <Typography component="div">
        <Box sx={{ fontWeight: "light", fontSize: "h6.fontSize", m: 3 }}>
          Comience a escribir su acuerdo de patas en la siguiente caja de texto:
        </Box>
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3, mx: 10 }}>
        <FroalaEditor 
          tag='textarea' 
          onModelChange={(info)=>{
            setcontenido(info)
            console.log(info)
          }
          }
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }} >
        <Tooltip title="Agregar">
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "text.primary" }}
            onClick={handleOpen}
          >
            <AddBoxIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 5 }} >
        <TextField label="Ingrese nombre" variant="standard" />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <ModalPatas ref={ref} />
      </Modal>
    </div>
  );
}

export default Body;
