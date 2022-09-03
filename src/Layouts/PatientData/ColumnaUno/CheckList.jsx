import { Checkbox } from "@mui/material";
import { useState } from "react";
import * as styles from "./ColumnaUnoStyles";

export const Checklist = ({ consultas, paymentAbaliable }) => {
  const [disabler, setDisabler] = useState(true);

  if (!consultas) return null;

  const handleClick = () => {
    setDisabler(false);
    //console.log(id);
    //AddPayment()
  };

  return consultas.map((element) => (
    <li key={element.Id} style={styles.checkBox}>
      <Checkbox
        disabled={!(paymentAbaliable && disabler)} //true desabilita
        checked={element.payed}
        style={styles.checked}
        onClick={paymentAbaliable && handleClick}
      />
    </li>
  ));
};

/*
                     tablaConsultas      AddPayment      
paymentAbaliable        false               true

disabler              false/true          false/true

disable (esperado)      true                false
*/
