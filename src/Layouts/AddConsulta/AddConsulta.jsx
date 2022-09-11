import { PersonSearch } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import * as styles from "./AddConsultaStyles";
import { PacientForm } from "./PacientForm";

export const AddConsulta = () => {
  const [paciente, setPaciente] = useState();

  const conditionalRender = () => {
    if (!paciente)
      return (
        <>
          <Avatar sx={styles.Avatar}>
            <PersonSearch color="primary" />
          </Avatar>
          <PacientForm functionProp={setPaciente} />
        </>
      );
  };

  return (
    <Grid item xs={false} sm={4} md={7} sx={styles.background}>
      <Container component="main" maxWidth="sm" sx={styles.Container}>
        <CssBaseline />
        <Typography component="h1" variant="h5" sx={styles.AddPacientText}>
          Agregar Consulta
        </Typography>
        <Box sx={styles.Box}>{conditionalRender()}</Box>
      </Container>
    </Grid>
  );
};
