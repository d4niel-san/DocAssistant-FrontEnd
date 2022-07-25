import { Typography } from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../../../context/apiContext";
import * as placeHolder from "./../Placeholders";
import * as styles from "./ColumnaDosStyles";
import { DatosPersonales } from "./DatosPersonales";
import { HistoriaClinica } from "./HistoriaClinica";

export const ColumnaDos = () => {
  const { pacienteBuscado } = useContext(ApiContext);

  return (
    <div style={styles.columnaDos}>
      <Typography sx={styles.nombre}>{pacienteBuscado.FirstName}</Typography>
      <Typography sx={styles.apellido}>{pacienteBuscado.LastName}</Typography>
      <Typography sx={styles.ocupacion}>
        Profesion: {pacienteBuscado.Ocupacion}
      </Typography>
      <br />
      <DatosPersonales />
      <br />
      <HistoriaClinica />
      <Typography>{placeHolder._historiaClinica}</Typography>
      <Typography>{placeHolder._notaUno}</Typography>
      <Typography>{placeHolder._fechaUno}</Typography>
      <Typography>{placeHolder._fechaDos}</Typography>
      <Typography>{placeHolder._notaDos}</Typography>
    </div>
  );
};