import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


 function Footer() {
    return (
    <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 3, sm: 5 }}
        bgcolor="text.secondary"
        color="white"
    >
  <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box>2022</Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>Desarrollado con ❤ por: <Link href="https://www.linkedin.com/in/nadia-men/" color="inherit">Nadia</Link>, <Link href="https://candidato.computrabajo.com.pe/candidate/cv/edit" color="inherit">Alvaro</Link>, <Link href="https://candidato.computrabajo.com.pe/candidate/cv/edit" color="inherit">Jian</Link> y <Link href="https://www.linkedin.com/in/nadia-men/" color="inherit">Jairo</Link></Box>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
             <Button href="https://github.com/acuerdo-de-patas/acuerdos-de-patas" sx={{color: "inherit" }} >                                                                                        
             <GitHubIcon/>
             </Button>
            </Grid>
          </Grid> 
        </Container> 
      </Box>    
);

}
export default Footer;