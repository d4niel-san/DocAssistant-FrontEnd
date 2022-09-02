import { Typography } from "@mui/material";
import { Checklist } from "../../Layouts/PatientData/ColumnaUno/CheckList";
import * as styles from "../../Layouts/PatientData/ColumnaUno/ColumnaUnoStyles";
import { ListadoConsultas } from "./ListadoConsultas";
import { ListadoImporte } from "./ListadoImporte";

/**
 *
 * Muestra las opciones en formato dropdown
 * @param {Object[]} consultas - array de consultas tal cual en base de datos 
 * @param {bool} paymentAbaliable - Permite el registro de pagos.
 
 */

export const TablaConsultas = ({ consultas, paymentAbaliable }) => {
  return (
    <>
      <div style={styles.gridA}>
        <Typography fontFamily="roboto" align="center" sx={styles.typoPrimary}>
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
    </>
  );
};
