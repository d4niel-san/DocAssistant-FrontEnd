import { Checkbox } from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../../../context/apiContext";
import * as styles from "./ColumnaUnoStyles";

export const Checklist = () => {
  const { consultasFiltradas } = useContext(ApiContext);
  if (!consultasFiltradas) return null;
  return consultasFiltradas.map((element) => (
    <li key={element.Id} style={styles.checkBox}>
      <Checkbox disabled checked={element.payed} style={styles.checked} />
    </li>
  ));
};
