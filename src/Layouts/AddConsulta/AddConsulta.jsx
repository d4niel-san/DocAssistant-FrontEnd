import { PersonSearch } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";
import * as styles from "./AddConsultaStyles";
import { ConsultaForm } from "./ConsultaForm";
import { InfoPaciente } from "./InfoPaciente";
import { PacientForm } from "./PacientForm";

export const AddConsulta = () => {
  const { pacienteBuscado } = useContext(ApiContext);

  return (
    <Grid item xs={false} sm={4} md={7} sx={styles.background}>
      <Container component="main" maxWidth="sm" sx={styles.Container}>
        <CssBaseline />

        <div style={styles.title}>
          <Typography component="h1" variant="h5" sx={styles.typoInblock}>
            Agregar Consulta{" "}
            {pacienteBuscado
              ? `: ${pacienteBuscado.LastName} ${pacienteBuscado.FirstName}`
              : ""}
          </Typography>
        </div>

        <Box sx={styles.Box}>
          {pacienteBuscado ? (
            <>
              <InfoPaciente />
              <ConsultaForm />
            </>
          ) : (
            <>
              <Avatar sx={styles.Avatar}>
                <PersonSearch color="#f1f1f1" />
              </Avatar>
              <PacientForm />
            </>
          )}
        </Box>
      </Container>
    </Grid>
  );
};
