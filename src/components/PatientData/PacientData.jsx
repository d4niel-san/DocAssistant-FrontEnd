// rgb: 248, 181, 197
//#region Imports
import { Container } from "@mui/material";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../../context/apiContext";
import { ColumnaDos } from "./ColumnaDos";
import { ColumnaUno } from "./ColumnaUno";
import * as styles from "./PacientDataStyles";

// #endregion

export const PacientData = () => {
  const { pacienteBuscado } = useContext(ApiContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (pacienteBuscado === undefined) {
      navigate("/queryPacient", { replace: true });
    }
  });

  if (pacienteBuscado !== undefined) {
    return (
      <>
        <div style={{ height: "64px" }}></div>
        <div style={styles.background}>
          <Container maxWidth="md" sx={styles.columnContainer}>
            <ColumnaUno />
            <ColumnaDos />
          </Container>
        </div>
      </>
    );
  }
};
