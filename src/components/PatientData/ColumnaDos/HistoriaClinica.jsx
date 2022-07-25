import { Typography } from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../../../context/apiContext";
import * as styles from "./HistoriaClinicaStyles";

export const HistoriaClinica = () => {
  const { pacienteBuscado } = useContext(ApiContext);

  return (
    <>
      <div style={styles.grid}>
        <div style={styles.div1}>
          <Typography sx={styles.titulo}>Historia Clinica</Typography>
        </div>
        <div style={styles.div2}>
          <Typography align="center" sx={styles.historiaClinicaId}>
            Nro.:{" "}
          </Typography>
          <Typography align="center" sx={styles.historiaClinicaIdData}>
            {pacienteBuscado.Id}
          </Typography>
        </div>
        <hr style={styles.hr}></hr>
        <br />
      </div>
    </>
  );
};
