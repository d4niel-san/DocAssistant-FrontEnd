import React from "react";
import ReactDom from "react-dom";
import * as styles from "./AddStoryStyles";
import CloseButton from "../../CloseButton";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

export const AddStory = ({ onClose, open, children }) => {
  if (!open) return null;

  var rightNow = new Date();
  var res = rightNow.toISOString().slice(0, 10);

  return ReactDom.createPortal(
    <>
      <div style={styles.overlay} />
      <div style={styles.modal}>
        <Typography align="center">Agregar Historia Clinica</Typography>
        {children}
        <Box
          component="form"
          noValidate
          //onSubmit={SignUpSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <TextField
                name="date"
                required
                hiddenLabel="true"
                fullWidth
                id="date"
                label="Fecha de Consulta"
                focused
                size="small"
                type="date"
                defaultValue={res}
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
