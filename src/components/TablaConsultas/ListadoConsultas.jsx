import { Typography } from "@mui/material";
import * as styles from "./ColumnaUnoStyles";

export const ListadoConsultas = ({ consultas }) => {
  if (!consultas) return null;

  console.log("las consultas a mostrar: ", consultas);
  return consultas.map((element) => (
    <li key={element.Id} style={styles.removeBullet}>
      <Typography sx={styles.typoNormal}>{element.date}</Typography>
    </li>
  ));
};
