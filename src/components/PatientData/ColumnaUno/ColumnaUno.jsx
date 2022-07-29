import { Checkbox, Typography } from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../../../context/apiContext";
import * as styles from "./ColumnaUnoStyles";

export const ColumnaUno = () => {
  const { pacienteBuscado } = useContext(ApiContext);

  const ListadoConsultas = () => {
    if (!pacienteBuscado.consultas) return null;
    return pacienteBuscado.consultas.map((element) => (
      <li key={element.Id} style={styles.removeBullet}>
        <Typography sx={styles.typoNormal}>{element.date}</Typography>
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
          <Checkbox sx={styles.checkBox} />
          <Checkbox sx={styles.checkBox} />
          <Checkbox sx={styles.checkBox} />
        </div>
      </div>
    </div>
  );
};
