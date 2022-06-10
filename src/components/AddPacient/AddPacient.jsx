//#region imports

import { PersonAddAlt } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import * as styles from "./AddPacientStyles";

//#endregion

export const AddPacient = () => {
  const SignUpSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      cell: data.get("cell"),
      dni: data.get("dni"),
    };
    console.log(newUser);
  };

  return (
    <Grid item xs={false} sm={4} md={7} sx={styles.background}>
      <Container component="main" maxWidth="sm" sx={styles.Container}>
        <CssBaseline />
        <Box sx={styles.Box}>
          <Avatar sx={styles.Avatar}>
            <PersonAddAlt color="primary" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Agregar Paciente
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={SignUpSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="family-name"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo Electronico"
                  name="email"
                  autoComplete="email"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="cell"
                  label="Nro. Celular"
                  type="tel"
                  id="cell"
                  autoComplete="Celular"
                  size="small"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="dni"
                  label="dni"
                  type="tel"
                  id="dni"
                  autoComplete="Nro. Documento"
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
              Registrar Paciente
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item sx={{ marginBottom: "0.5rem" }}></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Grid>
  );
};
