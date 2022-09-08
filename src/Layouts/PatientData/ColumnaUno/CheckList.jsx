import { Checkbox } from "@mui/material";
import * as styles from "./ColumnaUnoStyles";
import { ReactiveCheckBox } from "./ReactiveCheckBox";

export const Checklist = ({ consultas, paymentAbaliable }) => {
  if (!consultas) return null;

  if (paymentAbaliable) {
    return consultas.map((element) => (
      <li key={element.Id} style={styles.checkBox}>
        <ReactiveCheckBox checked={element.payed} />
      </li>
    ));
  } else {
    return consultas.map((element) => (
      <li key={element.Id} style={styles.checkBox}>
        <Checkbox
          disabled={true}
          checked={element.payed}
          style={styles.checked}
        />
      </li>
    ));
  }
};
