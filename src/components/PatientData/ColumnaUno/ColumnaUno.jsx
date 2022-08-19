import { Checkbox, Typography } from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../../../context/apiContext";
import AddButton from "../AddButton";
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
      <div style={styles.gridContainer}>
        <div style={styles.gridA}>
          <Typography
            fontFamily="roboto"
            align="center"
            sx={styles.typoPrimary}
          >
            Ultimas Consultas
          </Typography>
        </div>

        <div style={styles.gridB}>
          <Typography align="center" sx={styles.typoPrimary}>
            Importe
          </Typography>
        </div>

        <div style={styles.gridC}>
          <Typography align="center" sx={styles.typoPrimary}>
            Paga
          </Typography>
        </div>

        <div style={styles.gridD}>
          <ul style={styles.ulStyle}>
            <ListadoConsultas />
          </ul>
        </div>

        <div style={styles.gridE}></div>

        <div style={styles.gridF}>
          <Checklist />
        </div>

        <div style={styles.gridG}>
          <AddButton texto="Agregar Pago" />
        </div>
      </div>
    </div>
  );
};
