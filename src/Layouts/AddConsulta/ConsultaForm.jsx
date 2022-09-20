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
import * as styles from "./ConsultaFormStyles";
import RefreshIcon from "@mui/icons-material/Refresh";

export const ConsultaForm = () => {
  const { pacienteBuscado, setPacienteBuscado } = useContext(ApiContext);

  /* 
small datetime cast queries
SELECT   
     CAST('2007-05-08 12:35:29'     AS smalldatetime)  
    ,CAST('2007-05-08 12:35:30'     AS smalldatetime)  
    ,CAST('2007-05-08 12:59:59.998' AS smalldatetime);

source: 
dayHour: "2022-09-16T11:59"
 */

  const ConsultaSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newConsulta = {
      /* day: data.get("day"),
      hour: data.get("hour"), */
      patientId: pacienteBuscado.Id,
      dayHour: data.get("dayHour"),
      link: data.get("link"),
      amount: data.get("amount"),
      payed: data.get("payed") ? true : false,
    };
    console.log("Consulta Nueva: ", newConsulta);
  };

  const handleChange = () => {
    setPacienteBuscado(null);
  };

  return (
    <Box component="form" noValidate sx={styles.Box} onSubmit={ConsultaSubmit}>
      <Grid container spacing={1}>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            helperText="Día"
            type="date"
            fullWidth
            name="day"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            helperText="Hora"
            type="time"
            fullWidth
            name="hour"
          />
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            label="Fecha y Hora"
            //focused
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
        <Grid item xs={12} sm={4}>
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
        <Grid item xs={12} sm={2} sx={styles.CheckBox}>
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
          <Button type="submit" variant="contained" sx={styles.Button}>
            Consultar Paciente
          </Button>
        </div>
      </div>
    </Box>
  );
};
