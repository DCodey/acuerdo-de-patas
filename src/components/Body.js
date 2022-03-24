import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Modal from "@mui/material/Modal";
import Link from '@mui/material/Link';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import conejo from "./images/conejo.png";
import elefante from "./images/elefante.png";
import gato from "./images/gato.png";
import leon from "./images/leon.png";
import oso from "./images/oso.png";
import patos from "./images/patos.png";
import perro from "./images/perro.png";
import pollo from "./images/pollo.png";
import tigre from "./images/tigre.png";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

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
    title: "Patos",
    desc: "Patos",
  },
  {
    img: perro,
    title: "Perro",
    desc: "Perro",
  },
  {
    img: pollo,
    title: "Pollo",
    desc: "Pollo",
  },
  {
    img: tigre,
    title: "Tigre",
    desc: "Tigre",
  },
];

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
        <Box sx={style}>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Link href="https://www.flaticon.es/packs/footprints-2" title="iconos" color="inherit">Iconos creados por surang - Flaticon</Link>
        </Box>
      </Modal>
    </div>
  );
}

export default Body;
