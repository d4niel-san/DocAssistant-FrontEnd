import { PersonSearch } from "@mui/icons-material";
import { Avatar, Box, Container, CssBaseline, Grid } from "@mui/material";
import { QueryPacientForm } from "../../components/QueryPacientForm";
import * as styles from "./AddConsultaStyles";

export const AddConsulta = () => {
  return (
    <Grid item xs={false} sm={4} md={7} sx={styles.background}>
      <Container component="main" maxWidth="sm" sx={styles.Container}>
        <CssBaseline />
        <Box sx={styles.Box}>
          <Avatar sx={styles.Avatar}>
            <PersonSearch color="primary" />
          </Avatar>
          <QueryPacientForm />
        </Box>
      </Container>
    </Grid>
  );
};
