import { Typography } from "@mui/material";
import { padding } from "@mui/system";
import { useContext } from "react";
import { ApiContext } from "../../../context/apiContext";
import AddButton from "../AddButton";
import * as styles from "./HistoriaClinicaStyles";

export const HistoriaClinica = () => {
  const { pacienteBuscado } = useContext(ApiContext);

  const ListadoHistoriaClinica = () => {
    if (!pacienteBuscado.consultas) return null;
    return pacienteBuscado.consultas.map((element) => (
      <div key={element.Id} >
        <Typography>{element.date} : {element.register}</Typography>
        <br />
      </div>
    ));
  };

const addHistoriaClinica = () => {
  console.log("Clickee en Historia Clinica")
}

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
      <div style={styles.border}>
        <ListadoHistoriaClinica />
      </div>
      <div>
        <AddButton texto="Nueva Historia" backgroundColor="white" function={addHistoriaClinica} />
      </div>
    </>
  );
};
