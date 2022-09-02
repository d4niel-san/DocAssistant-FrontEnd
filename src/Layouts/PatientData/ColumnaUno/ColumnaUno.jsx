import { Typography } from "@mui/material";
import { Checklist } from "./CheckList";
import { ListadoConsultas } from "./ListadoConsultas";
import { ListadoImporte } from "./ListadoImporte";
import * as styles from "./ColumnaUnoStyles";
import AddButton from "../../../components/AddButton";
import { TablaConsultas } from "../../../components/TablaConsultas/TablaConsultas";
import { useContext } from "react";
import { ApiContext } from "../../../context/apiContext";

export const ColumnaUno = () => {
  const { consultasFiltradas } = useContext(ApiContext);

  const addHistoriaClinica = () => {
    console.log("Clickee en Agregar Pago");
  };

  return (
    <div style={styles.columnaUno}>
      <div style={styles.gridContainer}>
        {/* <div style={styles.gridA}>
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

        <div style={styles.gridE}>
          <ul style={styles.ulStyle}>
            <ListadoImporte />
          </ul>
        </div>

        <div style={styles.gridF}>
          <Checklist />
        </div> */}
        <TablaConsultas consultas={consultasFiltradas} />
        <div style={styles.gridG}>
          <AddButton texto="Agregar Pago" function={addHistoriaClinica} />
        </div>
      </div>
    </div>
  );
};
