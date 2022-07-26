import { Typography } from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../../../context/apiContext";
import * as styles from "./HistoriaClinicaStyles";
import * as placeHolder from "./../Placeholders";

export const HistoriaClinica = () => {
  const { pacienteBuscado } = useContext(ApiContext);

  return (
    <>
      <div style={styles.grid}>
        <div style={styles.div1}>
          <Typography sx={styles.titulo}>Historia Clinica</Typography>
        </div>
        <div style={styles.div2}>
          <Typography display="inline" sx={styles.historiaClinicaId}>
            Nro.:
          </Typography>
          <Typography display="inline" sx={styles.historiaClinicaIdData}>
            {pacienteBuscado.Id}
          </Typography>
        </div>
      </div>
      <hr style={styles.hr} />

      <Typography>{placeHolder._fechaUno}</Typography>
      <Typography>{placeHolder._notaUno}</Typography>
      <br />
      <Typography>{placeHolder._fechaDos}</Typography>
      <Typography>{placeHolder._notaDos}</Typography>
    </>
  );
};
