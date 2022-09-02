import { Checkbox } from "@mui/material";
import * as styles from "./ColumnaUnoStyles";

export const Checklist = ({ consultas, paymentAbaliable }) => {
  if (!consultas) return null;

  return consultas.map((element) => (
    <li key={element.Id} style={styles.checkBox}>
      <Checkbox
        disabled={!paymentAbaliable}
        checked={element.payed}
        style={styles.checked}
      />
    </li>
  ));
};