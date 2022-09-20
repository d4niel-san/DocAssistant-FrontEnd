import { Button, Checkbox, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";
import * as styles from "./ConsultaFormStyles";
import RefreshIcon from "@mui/icons-material/Refresh";

export const ConsultaForm = () => {
  const { setPacienteBuscado } = useContext(ApiContext);

  const SignUpSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newConsulta = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      ocupacion: data.get("ocupacion"),
      email: data.get("email"),
      cell: data.get("cell"),
      dni: data.get("dni"),
    };
    console.log("Consulta Nueva: ", newConsulta);
  };

  const handleChange = () => {
    setPacienteBuscado(null);
  };

  return (
    <Box component="form" noValidate sx={styles.Box}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField size="small" helperText="Día" type="date" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField size="small" helperText="Hora" type="time" fullWidth />
        </Grid>
        <Grid item xs={12} sm={10}>
          <TextField size="small" label="Enlace de Reunion" fullWidth />
        </Grid>
        <Grid item xs={12} sm={2} sx={styles.CheckBox}>
          <Checkbox />
          Pagado
        </Grid>
      </Grid>
      <div style={styles.gridContainer}>
        <div style={styles.gridA}>
          <Button onClick={handleChange} variant="contained" sx={styles.Button}>
            <RefreshIcon /> Refrescar
          </Button>
        </div>
        <div style={styles.gridB}>
          <Button type="submit" variant="contained" sx={styles.Button}>
            Consultar Paciente
          </Button>
        </div>
      </div>
    </Box>
  );
};
