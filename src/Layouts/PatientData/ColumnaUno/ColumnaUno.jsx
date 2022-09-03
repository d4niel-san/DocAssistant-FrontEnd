import { useState } from "react";
import { useContext } from "react";
import AddButton from "../../../components/AddButton";
import { TablaConsultas } from "../../../components/TablaConsultas/TablaConsultas";
import { ApiContext } from "../../../context/apiContext";
import { AddPayment } from "../ModalWindows/AddPayment";
import * as styles from "./ColumnaUnoStyles";

export const ColumnaUno = () => {
  const { consultasFiltradas } = useContext(ApiContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addHistoriaClinica = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div style={styles.columnaUno}>
      <div style={styles.gridContainer}>
        <TablaConsultas
          consultas={consultasFiltradas}
          paymentAbaliable="false"
        />
        <div style={styles.gridG}>
          <AddButton texto="Agregar Pago" function={addHistoriaClinica} />
        </div>
        <AddPayment open={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      </div>
    </div>
  );
};
