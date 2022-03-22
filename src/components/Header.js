import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PetsIcon from "@mui/icons-material/Pets";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import generarPdf from '../generarPdf';

function Header({ contenido, id }) {
  <script src="https://cdn.tailwindcss.com"></script>
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="bg-color">
        <Toolbar>
          <PetsIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Acuerdo de patas
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <VisibilityIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              generarPdf(contenido, id);
            }}
          >
            <PictureAsPdfIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
