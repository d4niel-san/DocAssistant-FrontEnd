import {
  Button,
  Checkbox,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import { ApiContext } from "../../context/apiContext";
import * as styles from "./ConsultaFormStyles";
import jwt_decode from "jwt-decode";
import RefreshIcon from "@mui/icons-material/Refresh";

export const ConsultaForm = () => {
  const { GUserLogged, setGUserLogged } = useContext(ApiContext);

  //#region google login autentication

  function handleCallbackResponse(response) {
    const userObject = jwt_decode(response.credential);
    console.log("GoogleUser: ", userObject);
    setGUserLogged(response.credential);
  }

  useEffect(() => {
    /* global google */

    google.accounts.id.initialize({
      client_id:
        "1095309654407-8oqjrjf7ra6d9t1h9us9dqt9ebl4f2eq.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  //#endregion

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
          {GUserLogged ? (
            <Button type="submit" variant="contained" sx={styles.Button}>
              Agendar Consulta
            </Button>
          ) : (
            <div id="signInDiv" />
          )}
        </div>
      </div>
    </Box>
  );
};
