import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PetsIcon from "@mui/icons-material/Pets";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Icon, Tooltip } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Pdf } from '../Pdf';

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
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "background.main" }}>
          <Toolbar>
            <Icon sx={{ mr: 2, color: "text.primary" }}>
              <PetsIcon />
            </Icon>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "text.primary", fontWeight: "bold", fontSize: 'h5.fontSize' }}
            >
              Acuerdo de patas
            </Typography>
            <Tooltip title="Visualizar">
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: "text.primary" }}
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
                sx={{ mr: 2, color: "text.primary" }}
              >
                <PictureAsPdfIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Header;