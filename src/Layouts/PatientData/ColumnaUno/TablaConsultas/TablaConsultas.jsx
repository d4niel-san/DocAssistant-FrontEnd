import { Typography } from "@mui/material";
import { Checklist } from "../CheckList";
import * as styles from "../ColumnaUnoStyles";
import { ReactiveCheckBox } from "../ReactiveCheckBox";
import { ListadoConsultas } from "./ListadoConsultas";
import { ListadoImporte } from "./ListadoImporte";

/**
 *
 * Muestra las opciones en formato dropdown
 * @param {Object[]} consultas - array de consultas tal cual en base de datos 
 * @param {bool} paymentAbaliable - Permite el registro de pagos.
 
 */

export const TablaConsultas = ({ consultas, paymentAbaliable }) => {
  const SubTabla = () => {
    return consultas.map((element) => (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex" }}>{element.date}</div>
        <div style={{ display: "flex" }}>{element.amount}</div>
        <div style={{ display: "flex" }}>
          <ReactiveCheckBox />
        </div>
      </div>
    ));
  };

  return null (
    /*<div style={{ display: "flex", flexDirection: "column" }}>

      <div style={styles.tablaContainer}>
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

        {/* <div style={styles.gridD}>
        <ul style={styles.ulStyle}>
          <ListadoConsultas consultas={consultas} />
        </ul>
      </div>

      <div style={styles.gridE}>
        <ul style={styles.ulStyle}>
          <ListadoImporte consultas={consultas} />
        </ul>
      </div>

      <div style={styles.gridF}>
        <Checklist consultas={consultas} paymentAbaliable={paymentAbaliable} />
      </div> 
      </div>
      <div>
        <SubTabla />
      </div>
    </div>*/
  );
};
