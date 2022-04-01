import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Modal from "@mui/material/Modal";
import ModalPatas from "./ModalPatas";
import pata from "./images/pata.png";

function FirmaPatas() {
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
            sx={{ mr: 2, color: "text.primary" }}
            onClick={handleOpen}
          >
            <img src={pata} width="60" height="60" />
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <TextField label="Ingrese nombre" variant="standard" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 2,
        }}
      >
        <Tooltip title="Agregar Firma">
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            width="60"
            sx={{ mr: 2, color: "text.primary" }}
          >
            <AddBoxIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <ModalPatas ref={ref} />
      </Modal>
    </div>
  );
}

export default FirmaPatas;
