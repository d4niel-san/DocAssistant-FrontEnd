import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Button,
  Checkbox,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useContext } from "react";
import { Dropdown } from "../../components/DropDown";
import { ApiContext } from "../../context/apiContext";
import { GoogleButton } from "../../google/google";
import { durations } from "./ConsultaDurations";
import * as styles from "./ConsultaFormStyles";

export const ConsultaForm = () => {
  const { GUserLogged } = useContext(ApiContext);
  const [duration, setDuration] = useState(20);

  const { pacienteBuscado, setPacienteBuscado, altaConsulta } =
    useContext(ApiContext);

  const ConsultaSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const endTime = endTimeConstructor(data.get("dayHour"));
    const newConsulta = {
      patientId: pacienteBuscado.Id,
      patientName: `${pacienteBuscado.LastName}, ${pacienteBuscado.FirstName}`,
      dayHour: data.get("dayHour"),
      link: data.get("link"),
      amount: data.get("amount"),
      endTime: endTime,
      payed: data.get("payed") ? true : false,
    };
    console.log("Consulta Nueva: ", newConsulta);
    altaConsulta(newConsulta);
  };

  const handleChange = () => {
    setPacienteBuscado(null);
  };

  const endTimeConstructor = (startTime) => {
    const dateStartTime = new Date(startTime);
    const year = dateStartTime.getFullYear();
    const month = dateStartTime.getMonth();
    const day = dateStartTime.getDate();
    let hours = dateStartTime.getHours();
    let minutes = dateStartTime.getMinutes();
    const seconds = dateStartTime.getSeconds();
    if (duration + minutes > 60) {
      hours++;
      minutes += duration;
      minutes -= 60;
    } else {
      minutes += duration;
    }
    const endDate = new Date(year, month, day, hours, minutes, seconds, 0);
    return endDate;
  };

  const handleDropdownChange = (event) => {
    const result = durations.find(
      (element) => element.value === event.target.value
    );
    setDuration(result.value);
    console.log(result.value);
  };

  return (
    <Box component="form" noValidate sx={styles.Box} onSubmit={ConsultaSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={8}>
          <TextField
            size="small"
            label="Fecha y Hora Inicio"
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

        <Grid item xs={12} sm={8}>
          <Dropdown
            valueByDefault={duration}
            handleChange={handleDropdownChange}
            options={durations}
            id="duration"
            label="Duración de la consulta"
          />
        </Grid>

        <Grid item xs={12} sm={4} sx={styles.CheckBox}>
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
