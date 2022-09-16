import { Typography } from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";
import * as styles from "./InfoPacienteStyles";

export const InfoPaciente = () => {
  const { pacienteBuscado } = useContext(ApiContext);

  return (
    <>
      <Typography sx={styles.text}>
        Paciente: {pacienteBuscado.LastName}, {pacienteBuscado.FirstName}
      </Typography>
      <Typography sx={styles.text}>
        Ocupacion: {pacienteBuscado.Ocupacion}
      </Typography>
      <Typography sx={styles.text}>E-Mail: {pacienteBuscado.Email}</Typography>
      <Typography sx={styles.text}>Cell: {pacienteBuscado.Cell}</Typography>
      <Typography sx={styles.text}>DNI: {pacienteBuscado.DNI}</Typography>
    </>
  );
};
