import { PersonSearch } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";
import * as styles from "./AddConsultaStyles";
import { InfoPaciente } from "./InfoPaciente";
import { PacientForm } from "./PacientForm";
import RefreshIcon from "@mui/icons-material/Refresh";
import { ConsultaForm } from "./ConsultaForm";

export const AddConsulta = () => {
  const { pacienteBuscado, setPacienteBuscado } = useContext(ApiContext);

  const handleChange = () => {
    setPacienteBuscado(null);
  };

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
                <PersonSearch color="primary" />
              </Avatar>
              <PacientForm />
            </>
          )}
        </Box>
        {pacienteBuscado && (
          <>
            <div style={styles.gridContainer}>
              <div style={styles.gridA}>
                <Button
                  onClick={handleChange}
                  variant="contained"
                  sx={styles.Button}
                >
                  <RefreshIcon /> Refrescar
                </Button>
              </div>
              <div style={styles.gridB}>
                <Button type="submit" variant="contained" sx={styles.Button}>
                  Consultar Paciente
                </Button>
              </div>
            </div>
          </>
        )}
      </Container>
    </Grid>
  );
};
