import React, { useContext } from "react";
import '../css/style.css'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "froala-editor/js/froala_editor.pkgd.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditor from "react-froala-wysiwyg";
import { DataContext } from "../context/DataContext";
import AgregarFirmaPata from "./scripts/AgregarFirmaPata";

const Body = () => {
  const { setContenido } = useContext(DataContext);

  const alerta = () => {
    alert("hola");
    alert("chau");
  };

  return (
    <>
      <Box className="editor-texto container">
        <FroalaEditor
          tag="textarea"
          onModelChange={(info) => {
            setContenido(info);
            console.log(info);
          }}
          config={{
            placeholderText: "Escriba su acuerdo de patas aquí",
          }}
        />
      </Box>      
      <AgregarFirmaPata />
    </>
  );
};

export default Body;
