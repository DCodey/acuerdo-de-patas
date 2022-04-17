import React, { useState } from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PetsIcon from "@mui/icons-material/Pets";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Modal from "@mui/material/Modal";
import { Icon, Tooltip } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { converHTMLToPDF } from '../Pdf';
import ContentPdf from './ContentPdf';

const theme = createTheme({
  palette: {
    background: {
      main: grey[50],
    },
    text: {
      primary: grey[900],
    },
  },
});

function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ref = React.createRef();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, mt: 3 }} className="container">
        <AppBar position="static" sx={{ bgcolor: "#f0f2f5", borderRadius: "16px", p:0.7 }}>
          <Toolbar>
            <Icon sx={{ mr: 2, color: "rgba(0,0,0,0.82)" }}>
              <PetsIcon />
            </Icon>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "rgba(0,0,0,0.82)", fontWeight: "bold", fontSize: '1.5rem' }}
            >
              ACUERDO DE PATAS
            </Typography>
            <Tooltip title="Visualizar">
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: "rgba(0,0,0,0.82)" }}
                onClick={handleOpen}
              // onClick={()=>{Pdf()}}
              >
                <VisibilityIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Descargar PDF">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, color: "rgba(0,0,0,0.82)" }}
                onClick={() => { converHTMLToPDF() }}
              >
                <PictureAsPdfIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>

        <Modal
          open={open}
          onClose={handleClose}
        >
          <ContentPdf ref={ref} />
        </Modal>
      </Box>
    </ThemeProvider>
  );
}

export default Header;