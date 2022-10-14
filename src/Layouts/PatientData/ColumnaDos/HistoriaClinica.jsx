import { Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ApiContext } from "../../../context/apiContext";
import AddButton from "../../../components/AddButton";
import * as styles from "./HistoriaClinicaStyles";
import { AddStory } from "../ModalWindows/AddStory";

export const HistoriaClinica = () => {
  const { pacienteBuscado } = useContext(ApiContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let consultasConRegistro = pacienteBuscado.consultas.filter(
    (element) => element.register
  );

  let emptyRegistros =
    pacienteBuscado.consultas.length - consultasConRegistro.length;

  const ListadoHistoriaClinica = () => {
    if (!pacienteBuscado.consultas) return null;

    return consultasConRegistro.map((element) => (
      <div key={element.Id}>
        <Typography>
          {element.date} : {element.register}
        </Typography>
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
      <div style={styles.border}>
        <ListadoHistoriaClinica />
      </div>
      <div>
        <AddButton
          texto="Modificar / Agregar Historia"
          backgroundColor="white"
          function={() => setModalIsOpen(!modalIsOpen)}
        />
      </div>
      <AddStory open={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      {emptyRegistros && (
        <div
          style={styles.modalEmptyConsultas}
        >{`Che chango faltam ${emptyRegistros} data`}</div>
      )}
    </>
  );
};
