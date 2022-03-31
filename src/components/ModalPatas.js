import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { DataContext } from "../context/DataContext";

const theme = createTheme({
  palette: {
    background: {
      main: grey[200],
    },
    text: {
        primary: grey[900],
      },
  },
});

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

const ModalPatas = React.forwardRef((props, ref) => {
  const {items} = useContext(DataContext)
  
  return (
    <ThemeProvider theme={theme} ref={ref}>
      <Box sx={style}>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={120}>
          {items.map((item) => (
            <Button key= {item.title} sx={{ p: 0 }}>
              <ImageListItem
                key={item.img}
                sx={{
                  p: 2,
                  mb: 3,
                  bgcolor: "background.main",
                  borderRadius: "16px",
                }}
              >
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <Typography
                  sx={{ display: "flex", justifyContent: "center", mt: 1, color: "text.primary" }}
                >
                  {item.title}
                </Typography>
              </ImageListItem>
            </Button>
          ))}
        </ImageList>
        <Link
          href="https://www.flaticon.es/packs/footprints-2"
          title="iconos"
          color="inherit"
        >
          Iconos creados por surang - Flaticon
        </Link>
      </Box>
    </ThemeProvider>
  );
});

export default ModalPatas;
