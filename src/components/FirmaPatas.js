import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import ModalPatas from "./ModalPatas";
import pata from "./images/pata.png";

function FirmaPatas({ nombre, onChange }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ref = React.createRef();

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Tooltip title="Elegir Pata">
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ color: "text.primary" }}
            onClick={handleOpen}
          >
            <img src={pata} width="60" height="60" />
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <TextField
          sx={{ input: { textAlign: "center" } }}
          label="Ingrese nombre"
          variant="standard"
          value={nombre}
          onChange={e => onChange("nombre", e.target.value)} />

      </Box>

      <Modal open={open} onClose={handleClose}>
        <ModalPatas ref={ref} nombre={nombre} setOpen={setOpen}/>
      </Modal>
    </div>
  );
}

export default FirmaPatas;
