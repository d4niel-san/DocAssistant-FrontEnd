import { Checkbox } from "@mui/material";
import * as styles from "./ColumnaUnoStyles";
import { ReactiveCheckBox } from "./ReactiveCheckBox";

export const Checklist = ({ consultas, paymentAbaliable }) => {
  console.log("checklist: ", consultas);

  if (!consultas) return null;

  if (paymentAbaliable) {
    return consultas.map((element) => (
      <li key={element.Id} style={styles.checkBox}>
        <ReactiveCheckBox props={consultas} />
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
