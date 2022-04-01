import React, { useState, useRef, useEffect } from "react";
import FirmaPatas from "../FirmaPatas";
import FormularioPatas from "./FormularioPatas";
import { Button } from "reactstrap";

const defaultValores = {
    valor: ""
};

function Row({ onRemove }) {

    return (
        <div className="row mb-4">
            <div className="col-md-6">
                <div className="form-group-vertical">
                    <FirmaPatas />
                </div>
            </div>
            <div className="col">
                <Button color="danger" outline onClick={onRemove}> eliminar </Button>
            </div>
        </div>
    );
}

export default function AgregarFirmaPata() {

    const [rows, setRows] = useState([defaultValores]);

    const handleOnChange = (index, name, value) => {
        const copyRows = [...rows];
        copyRows[index] = {
            ...copyRows[index],
            [name]: value
        };
        setRows(copyRows);
    };

    const handleOnAdd = () => {
        setRows(rows.concat(defaultValores));
    };

    const handleOnRemove = index => {
        const copyRows = [...rows];
        copyRows.splice(index, 1);
        setRows(copyRows);
    };

    return (
        <div className="card" >

            <Button color="primary" className="mt-1 mb-2" outline onClick={handleOnAdd}> Agregar valor </Button>

            <form className="p-3" onSubmit={(ev) => FormularioPatas(
                ev
            )}>
                <div className="row">
                </div>
                <label htmlFor="nome"></label>
                {rows.map((row, index) => (
                    <Row
                        {...row}
                        onChange={(name, value) => handleOnChange(index, name, value)}
                        onRemove={() => handleOnRemove(index)}
                        handleOnAdd={handleOnAdd}
                        key={index}
                    />

                ))}
            </form>
        </div>
    );
}
