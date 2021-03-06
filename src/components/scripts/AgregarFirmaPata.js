import React, { useState, useContext } from "react";
import FirmaPatas from "../FirmaPatas";
import Box from "@mui/material/Box";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CancelIcon from '@mui/icons-material/Cancel';
import { DataContext } from "../../context/DataContext";
const defaultValores = {
    nombre: ""
};

function Row({ onRemove, nombre, onChange, index, imagen }) {

    return (
        <div className="row mb-4">
            <div className="col-md-6">

                <Box className="btn-delete">
                    <Tooltip title="Eliminar">
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="delete"
                            width="60"
                            onClick={onRemove}
                            sx={{ mr: 2, color: "text.primary" }}
                        >
                            <CancelIcon color="error" />
                        </IconButton>
                    </Tooltip>
                </Box>
                <div className="form-group-vertical">
                    <FirmaPatas nombre={nombre} onChange={onChange} index={index} imagen={imagen} />
                </div>
            </div>
        </div>
    );
}

export default function AgregarFirmaPata() {

    const { setFirmas, firmas } = useContext(DataContext)
    const imagenes = [];
    firmas.map((firma, key) => {
        return imagenes[key] = firma.url;
    });
    const [rows, setRows] = useState([defaultValores]);

    const handleOnChange = (index, name, value) => {
        const copyRows = [...rows];
        copyRows[index] = {
            ...copyRows[index],
            [name]: value
        };
        setRows(copyRows);
        actualizaNombre(index, value);
    };

    const handleOnAdd = () => {
        setRows(rows.concat(defaultValores));
    };

    const handleOnRemove = (index) => {
        const copyRows = [...rows];
        copyRows.splice(index, 1);
        setRows(copyRows);
        eliminarCaja(index);
    };

    const eliminarCaja = (index) => {
        if (firmas[index] === undefined) {
            console.log("es indefinido");
        } else {
            firmas.splice(index, 1);
            setFirmas(firmas);
            console.log(firmas);
            actualizarKeys();
        }
    }

    const actualizarKeys = () => {
        const actualizaFirma = firmas.map((firma, indice) => {
            firma.key = indice;
            return firma;
        });
        setFirmas(actualizaFirma);
    }

    const actualizaNombre = (index, value) => {
        const actualizaNombre = firmas.map(firma => {
            if (firma.key === index) {
                firma.nombre = value;
                return firma;
            }
            return firma;
        });
        setFirmas(actualizaNombre);
    }

    const FPatas = (ev) => {
        ev.preventDefault();
    };

    return (
        <div className="card" >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    my: 2,
                }}
            >
                <Tooltip title="Agregar Firma">
                    <div onClick={handleOnAdd} className="btn-add-firma d-flex justify-content-center align-items-center">
                        <div className="btn-add">+</div>
                    </div>
                </Tooltip>
            </Box>
            <form className="p-3 firmas-flex" onSubmit={(ev) => FPatas(
                ev
            )}>
                {rows.map((row, index) => (
                    <Row
                        {...row}
                        onChange={(name, value) => handleOnChange(index, name, value)}
                        onRemove={() => handleOnRemove(index)}
                        handleOnAdd={handleOnAdd}
                        index={index}
                        key={index}
                        imagen={imagenes[index]}
                    />
                ))}
            </form>
        </div>
    );
}

