import { Checkbox, Typography } from "@mui/material";
import { ReactiveCheckBox } from "../ReactiveCheckBox";
import * as styles from "../TablaConsultas/TablaConsultasStyles";
import { Checklist } from "./CheckList";

/**
 *
 * Muestra las opciones en formato dropdown
 * @param {Object[]} consultas - array de consultas tal cual en base de datos 
 * @param {bool} paymentAbaliable - Permite el registro de pagos.
 
 */

export const TablaConsultas = ({ consultas, paymentAbaliable }) => {
  
  const renderizadoCondicional = (element) => {
    if (paymentAbaliable)
      return <ReactiveCheckBox {...element} />
    else {
      return <Checkbox checked={element.payed} disabled color={"pinkMain"} />
      }
  }
  
  const SubTabla = () => {
    return consultas.map((element) => (
      <div key={element.Id} style={styles.gridContainer}>
        <div style={styles.gridA}>{element.date}</div>
        <div style={styles.gridB}>$ {element.amount}</div>
        <div style={styles.gridC}>
          {renderizadoCondicional(element)}
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
