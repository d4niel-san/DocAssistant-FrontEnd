import { useContext } from "react";
import ReactDom from "react-dom";
import CloseButton from "../../../components/CloseButton";
import { SaveButton } from "../../../components/SaveButton";
import { TablaConsultas } from "../../../components/TablaConsultas/TablaConsultas";
import { ApiContext } from "../../../context/apiContext";
import * as styles from "./AddPaymentStyles";

export const AddPayment = ({ onClose, open }) => {
  const { consultasFiltradas } = useContext(ApiContext);

  function modificarHistoriaClinica() {
    const consultasPagadas = consultasFiltradas.filter((e) => e.payed);
    console.log(consultasPagadas);
  }

  const consultasImpagas = consultasFiltradas.filter((e) => !e.payed);
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={styles.overlay} />
      <div style={styles.modal}>
        <div style={styles.columnaUno}>
          <div style={styles.gridContainer}>
            <TablaConsultas consultas={consultasImpagas} paymentAbaliable />
          </div>
          <div style={styles.buttonRow}>
            <SaveButton texto="Guardar" function={modificarHistoriaClinica} />
            <CloseButton texto="Cerrar" function={onClose} />
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};
