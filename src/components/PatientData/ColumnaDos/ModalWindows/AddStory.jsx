import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import { ApiContext } from "../../../../context/apiContext";
import CloseButton from "../../CloseButton";
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

  const Dropdown = () => {
    return (
      <Select
        labelId="Fecha de Consulta"
        id="date"
        value={consulta}
        onChange={handleChange}
        label="Fecha de Consulta"
      >
        {consultasFiltradas.map((listItem, index) => (
          <MenuItem key={index} value={listItem.date}>
            {listItem.date}
          </MenuItem>
        ))}
      </Select>
    );
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
              <Dropdown />
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
