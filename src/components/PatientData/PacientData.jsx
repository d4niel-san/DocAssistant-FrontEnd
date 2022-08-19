// rgb: 248, 181, 197
//#region Imports
import { Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../../context/apiContext";
import { ColumnaDos } from "./ColumnaDos/ColumnaDos";
import { ColumnaUno } from "./ColumnaUno/ColumnaUno";
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
          <Container maxWidth="md" sx={styles.container}>
            <Typography sx={styles.nombre}>
              {pacienteBuscado.FirstName}
            </Typography>
            <Typography sx={styles.apellido}>
              {pacienteBuscado.LastName}
            </Typography>
            <Typography sx={styles.ocupacion}>
              Profesion: {pacienteBuscado.Ocupacion}
            </Typography>
          </Container>
          
          <Container maxWidth="md" sx={styles.columnContainer}>
            <ColumnaUno />
            <ColumnaDos />
          </Container>
        </div>
      </>
    );
  }
};
