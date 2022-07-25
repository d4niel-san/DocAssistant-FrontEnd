import { Typography } from "@mui/material";
import * as styles from "./DatosPersonalesStyles";
import * as placeHolder from "./../Placeholders";
import { useContext } from "react";
import { ApiContext } from "../../../context/apiContext";

export const DatosPersonales = () => {
  const { pacienteBuscado } = useContext(ApiContext);

  return (
    <>
      <Typography sx={styles.titulo}>Datos Personales</Typography>
      <hr style={styles.hr}></hr>
      <br />
      <div style={styles.grid}>
        <div styles={styles.div1}>
          <Typography style={styles.gridLabel}>DNI:</Typography>
        </div>
        <div styles={styles.div2}>
          <Typography align="right">{pacienteBuscado.DNI}</Typography>
        </div>
        <div styles={styles.div3}>
          <Typography style={styles.gridLabel}>Celular: </Typography>
        </div>
        <div styles={styles.div4}>
          {" "}
          <Typography align="right">{pacienteBuscado.Cell}</Typography>
        </div>
        <div styles={styles.div5}>
          <Typography style={styles.gridLabel}>E-Mail: </Typography>
        </div>
        <Typography align="right">{pacienteBuscado.Email}</Typography>
        <div styles={styles.div6}></div>
      </div>
    </>
  );
};