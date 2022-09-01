import { Typography } from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../../../context/apiContext";
import * as styles from "./ColumnaUnoStyles";

export const ListadoConsultas = () => {
  const { consultasFiltradas } = useContext(ApiContext);

  if (!consultasFiltradas) return null;

  console.log("las consultas a mostrar: ", consultasFiltradas);
  return consultasFiltradas.map((element) => (
    <li key={element.Id} style={styles.removeBullet}>
      <Typography sx={styles.typoNormal}>{element.date}</Typography>
    </li>
  ));
};
