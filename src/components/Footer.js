import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


 function Footer() {
    return (
    <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
    >
  <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box>2022</Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>Desarrollado con ❤ por: Nadia, Alvaro, Jian y Jairo </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box><img src={github}/></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    
);

}
export default Footer;