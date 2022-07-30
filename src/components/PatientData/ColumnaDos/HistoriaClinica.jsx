import { Typography } from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../../../context/apiContext";
import AddButton from "../AddButton";
import * as styles from "./HistoriaClinicaStyles";

export const HistoriaClinica = () => {
  const { pacienteBuscado } = useContext(ApiContext);

  const ListadoHistoriaClinica = () => {
    if (!pacienteBuscado.consultas) return null;
    return pacienteBuscado.consultas.map((element) => (
      <div key={element.Id}>
        <Typography>{element.date}</Typography>
        <Typography>{element.register}</Typography>
        <br />
      </div>
    ));
  };

  return (
    <>
      <div style={styles.grid}>
        <div style={styles.div1}>
          <Typography sx={styles.titulo}>Historia Clinica</Typography>
        </div>
        <div style={styles.div2}>
          <Typography display="inline" sx={styles.historiaClinicaId}>
            Nro.:
          </Typography>
          <Typography display="inline" sx={styles.historiaClinicaIdData}>
            {pacienteBuscado.Id}
          </Typography>
        </div>
      </div>
      <hr style={styles.hr} />
      <div>
        <ListadoHistoriaClinica />
        <AddButton texto="hey man" backgroundColor="white" />
      </div>
    </>
  );
};
