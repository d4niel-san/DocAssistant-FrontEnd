import { Checkbox, Typography } from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../../../context/apiContext";
import * as styles from "./ColumnaUnoStyles";

export const ColumnaUno = () => {
  const { consultasFiltradas } = useContext(ApiContext);

  const ListadoConsultas = () => {
    if (!consultasFiltradas) return null;
    console.log("las consultas a mostrar: ", consultasFiltradas);
    return consultasFiltradas.map((element) => (
      <li key={element.Id} style={styles.removeBullet}>
        <Typography sx={styles.typoNormal}>{element.date}</Typography>
      </li>
    ));
  };

  const Checklist = () => {
    if (!consultasFiltradas) return null;
    return consultasFiltradas.map((element) => (
      <li key={element.Id} style={styles.checkBox}>
        <Checkbox disabled checked={element.payed} />
      </li>
    ));
  };

  return (
    <div style={styles.columnaUno}>
      <img style={styles.avatar} src="https://via.placeholder.com/180" alt="" />
      <div style={styles.gridContainer}>
        <div style={styles.gridUno}>
          <Typography
            fontFamily="roboto"
            align="center"
            sx={styles.typoPrimary}
          >
            Ultimas
          </Typography>
          <Typography align="center" sx={styles.typoPrimary}>
            Consultas
          </Typography>
        </div>
        <div style={styles.gridDos}>
          <Typography align="center" sx={styles.typoPrimary}>
            Paga
          </Typography>
        </div>
        <div style={styles.gridTres}>
          <ul style={styles.ulStyle}>
            <ListadoConsultas />
          </ul>
        </div>
        <div style={styles.gridCuatro}>
          <Checklist />
        </div>
      </div>
    </div>
  );
};
