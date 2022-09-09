import { Checkbox } from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../../../context/apiContext";
import * as styles from "./ColumnaUnoStyles";
import { ReactiveCheckBox } from "./ReactiveCheckBox";

export const Checklist = ({ consultas, paymentAbaliable }) => {
  const { consultasImpagas } = useContext(ApiContext);
/*   console.log("Consultas Impagas: ",consultasImpagas)
 */  if (!consultas) return null;

  if (paymentAbaliable) {
    return consultasImpagas.map((element) => (
      <li key={element.Id} style={styles.checkBox}>
        <ReactiveCheckBox element/>
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
