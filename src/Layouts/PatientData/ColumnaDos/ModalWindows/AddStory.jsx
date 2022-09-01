import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import CloseButton from "../../../../components/CloseButton";
import { Dropdown } from "../../../../components/DropDown";
import { ApiContext } from "../../../../context/apiContext";
import * as styles from "./AddStoryStyles";

//defaultValue={new Date().toISOString().slice(0, 10)}

export const AddStory = ({ onClose, open, children }) => {
  const { consultasFiltradas } = useContext(ApiContext);
  const [consulta, setConsulta] = useState(consultasFiltradas[0].date);
  console.log(consulta);

  const handleChange = (event) => {
    setConsulta(event.target.value);
  };

  if (!open) return null;

  const SignUpTest = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newHistory = {
      date: data.get("date"),
      historia: data.get("historia"),
    };
    console.log(newHistory);
    //createPacient(newUser);
  };

  return ReactDom.createPortal(
    <>
      <div style={styles.overlay} />
      <div style={styles.modal}>
        <Typography align="center">Agregar Historia Clinica</Typography>
        {children}
        <Box component="form" noValidate onSubmit={SignUpTest} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              {console.log(consulta)}
              <Dropdown
                valueByDefault={consulta}
                handleChange={handleChange}
                id="date"
                options={consultasFiltradas.map((e) => ({
                  value: e.date,
                  label: e.date,
                }))}
                label="Fecha de Consulta"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                focused
                id="historia"
                label="Historia Clinica"
                name="historia"
                size="small"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={styles.Button}
          >
            Agregar Historia Medica
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item sx={{ marginBottom: "0.5rem" }}></Grid>
          </Grid>
        </Box>
        <CloseButton
          texto="Cerrar"
          backgroundColor="white"
          function={onClose}
        ></CloseButton>
      </div>
    </>,
    document.getElementById("portal")
  );
};
