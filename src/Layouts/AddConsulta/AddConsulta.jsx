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

export const AddConsulta = () => {
  const { pacienteBuscado, setPacienteBuscado } = useContext(ApiContext);

  const handleChange = () => {
    setPacienteBuscado(null);
  };

  return (
    <Grid item xs={false} sm={4} md={7} sx={styles.background}>
      <Container component="main" maxWidth="sm" sx={styles.Container}>
        <CssBaseline />
        <div style={styles.gridContainer}>
          <div style={styles.gridA}>
            <Typography component="h1" variant="h5" sx={styles.AddPacientText}>
              Agregar Consulta
            </Typography>
          </div>
          <div style={styles.gridB}>
            <Button onClick={handleChange}>
              <RefreshIcon />
            </Button>
          </div>
        </div>

        <Box sx={styles.Box}>
          {pacienteBuscado ? (
            <InfoPaciente />
          ) : (
            <>
              <Avatar sx={styles.Avatar}>
                <PersonSearch color="primary" />
              </Avatar>
              <PacientForm />
            </>
          )}
        </Box>
      </Container>
    </Grid>
  );
};
