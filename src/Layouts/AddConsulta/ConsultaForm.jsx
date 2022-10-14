import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Button,
  Checkbox,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";
import { GoogleButton } from "../../google/google";
import * as styles from "./ConsultaFormStyles";

export const ConsultaForm = () => {
  const { GUserLogged } = useContext(ApiContext);

  const { pacienteBuscado, setPacienteBuscado, altaConsulta } =
    useContext(ApiContext);

  const ConsultaSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newConsulta = {
      patientId: pacienteBuscado.Id,
      dayHour: data.get("dayHour"),
      link: data.get("link"),
      amount: data.get("amount"),
      payed: data.get("payed") ? true : false,
    };
    console.log("Consulta Nueva: ", newConsulta);
    altaConsulta(newConsulta);
  };

  const handleChange = () => {
    setPacienteBuscado(null);
  };

  return (
    <Box component="form" noValidate sx={styles.Box} onSubmit={ConsultaSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            label="Fecha y Hora"
            fullWidth
            type="datetime-local"
            name="dayHour"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <TextField
            size="small"
            label="Importe"
            fullWidth
            name="amount"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={2.5} sx={styles.CheckBox}>
          <Checkbox name="payed" />
          Pagado
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            size="small"
            label="Enlace de Reunion"
            fullWidth
            name="link"
          />
        </Grid>
      </Grid>
      <div style={styles.gridContainer}>
        <div style={styles.gridA}>
          <Button onClick={handleChange} variant="contained" sx={styles.Button}>
            <RefreshIcon /> Refrescar
          </Button>
        </div>
        <div style={styles.gridB}>
          {GUserLogged ? (
            <Button type="submit" variant="contained" sx={styles.Button}>
              Agendar Consulta
            </Button>
          ) : (
            <GoogleButton />
          )}
        </div>
      </div>
    </Box>
  );
};
