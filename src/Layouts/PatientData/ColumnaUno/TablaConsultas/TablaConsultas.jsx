import { Typography } from "@mui/material";
import { Checklist } from "../CheckList";
import * as styles from "../TablaConsultas/TablaConsultasStyles";
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
      <div style={styles.gridContainer}>
        <div style={styles.gridA}>{element.date}</div>
        <div style={styles.gridB}>$ {element.amount}</div>
        <div style={styles.gridC}>
          <ReactiveCheckBox />
        </div>
      </div>
    ));
  };

  return (
    <div style={{borderBottom: "2px solid white", marginBottom: "10px"}}>
      <div style={{...styles.gridContainer, borderBottom: "2px solid white",}}>
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
      </div>

      <SubTabla />

     
    </div >
  );
};
