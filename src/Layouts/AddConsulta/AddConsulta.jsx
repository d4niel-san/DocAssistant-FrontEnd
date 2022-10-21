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
import { GoogleButton } from "../../google/google";
import * as styles from "./AddConsultaStyles";
import { ConsultaForm } from "./ConsultaForm";
import { InfoPaciente } from "./InfoPaciente";
import { PacientForm } from "./PacientForm";

export const AddConsulta = () => {
  const { pacienteBuscado } = useContext(ApiContext);
  const { GUserLogged } = useContext(ApiContext);

  const title = GUserLogged ? "Agregar Consulta " : "Google Login ";

  return (
    <Grid item xs={false} sm={4} md={7} sx={styles.background}>
      <Container component="main" maxWidth="sm" sx={styles.Container}>
        <CssBaseline />

        <div style={styles.title}>
          <Typography component="h1" variant="h5" sx={styles.typoInblock}>
            {title}
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
          ) : GUserLogged ? (
            <>
              <Avatar sx={styles.Avatar}>
                <PersonSearch color="#f1f1f1" />
              </Avatar>
              <PacientForm />
              {/* <button onClick={AddCalendarEvent}>hola</button> */}
              <GoogleButton />
            </>
          ) : (
            <>
              {/* <button onClick={AddCalendarEvent}>hola</button> */}
              <div style={{ padding: "20px 10px" }} id="signInDiv" />
              <GoogleButton />
            </>
          )}
        </Box>
      </Container>
    </Grid>
  );
};
