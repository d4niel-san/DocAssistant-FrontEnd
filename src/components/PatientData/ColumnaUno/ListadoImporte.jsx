import { Typography } from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../../../context/apiContext";
import * as styles from "./ColumnaUnoStyles";

export const ListadoImporte = () => {
  const { consultasFiltradas } = useContext(ApiContext);
  if (!consultasFiltradas) return null;
  return consultasFiltradas.map((element) => (
    <li key={element.Id} style={styles.removeBullet}>
      <Typography sx={styles.typoNormal}>$ {element.amount}</Typography>
    </li>
  ));
};
