import { Typography } from "@mui/material";
import * as styles from "./ColumnaUnoStyles";

export const ListadoImporte = ({ consultas }) => {
  if (!consultas) return null;
  return consultas.map((element) => (
    <li key={element.Id} style={styles.removeBullet}>
      <Typography sx={styles.typoNormal}>$ {element.amount}</Typography>
    </li>
  ));
};
