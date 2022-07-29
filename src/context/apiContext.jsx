import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

export const ApiContext = createContext(0);

export const Context = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [pacienteBuscado, setPacienteBuscado] = useState();
  //const [consultasPaciente, setconsultasPaciente] = useState();
  const [showNavBar, setShowNavBar] = useState(true);
  let navigate = useNavigate();

  async function createPacient(pacient) {
    await api
      .post("/pacientes", pacient)
      .then((response) => {
        if (response) alert("Paciente Agregado a la base de datos");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function searchPacient(patient) {
    await api
      .post("/getPaciente", patient)
      .then((response) => {
        if (response) {
          console.log("Paciente encontrado: ", response.data);
          setPacienteBuscado(response.data);
          consultasPacient(response.data.Id);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function consultasPacient(patientId) {
    await api
      .post("/consultasPaciente", { patientId })
      .then((response) => {
        if (response) {
          console.log("Consultas Paciente: ", response.data);
          //setconsultasPaciente(response.data);
          navigate("/Pacient", { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <ApiContext.Provider
      value={{
        createPacient,
        consultasPacient,
        searchPacient,
        isUserLogged,
        setIsUserLogged,
        pacienteBuscado,
        setPacienteBuscado,
        showNavBar,
        setShowNavBar,
        //consultasPaciente,
        //setconsultasPaciente,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
