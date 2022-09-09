import { Checkbox } from "@mui/material";
import * as styles from "./CheckListStyles";

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
