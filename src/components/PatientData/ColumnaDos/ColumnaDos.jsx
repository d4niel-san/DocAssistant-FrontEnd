import * as styles from "./ColumnaDosStyles";
import { DatosPersonales } from "./DatosPersonales";
import { HistoriaClinica } from "./HistoriaClinica";

export const ColumnaDos = () => {

  return (
    <div style={styles.columnaDos}>
      <br />
      <DatosPersonales />
      <br />
      <HistoriaClinica />
    </div>
  );
};
