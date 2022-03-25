import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Modal from "@mui/material/Modal";
import ModalPatas  from "./ModalPatas";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-build-classic";

function Body() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [contenido, setcontenido] = useState('')

  return (
    <div>
      <Typography component="div">
        <Box sx={{ fontWeight: "light", fontSize: "h6.fontSize", m: 3 }}>
          Comience a escribir su acuerdo de patas en la siguiente caja de texto:
        </Box>
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }}>
      <CKEditor
        editor={ClassicEditor}
        data={contenido}
        onChange={(event, editor) => {
          const data = editor.getData();
          setcontenido(data)
        }}
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalPatas />
      </Modal>
    </div>
  );
}

export default Body;
