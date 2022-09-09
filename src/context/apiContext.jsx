import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { filtrarConsultas } from "../Layouts/PatientData/ColumnaUno/ColumnaUnoServices";
import api from "./api";

export const ApiContext = createContext(0);

export const Context = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [pacienteBuscado, setPacienteBuscado] = useState();
  const [consultasFiltradas, setconsultasFiltradas] = useState();
  const [consultasImpagas, setConsultasImpagas] = useState();


  const [showNavBar, setShowNavBar] = useState(true);
  let navigate = useNavigate();

  async function createPacient(pacient) {
    await api
      .post("/pacientes", pacient)
      .then((response) => {
        if (response) alert("Paciente Agregado a la base de datos");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const refreshPacient = () => {
    const dni = pacienteBuscado.DNI.replace(/\./g, "");
    const User = {
      filter: "dni",
      data: dni,
    };
    console.warn("Usuario: ", User);
    searchPacient(User);
  };

  async function searchPacient(patient) {
    await api
      .post("/getPaciente", patient)
      .then((response) => {
        if (response) {
          console.warn("Paciente encontrado: ", response.data);
          setPacienteBuscado(response.data);
          navigate("/Pacient", { replace: true });
          setconsultasFiltradas(filtrarConsultas(response.data.consultas));
          setConsultasImpagas(response.data.consultas.filter((e) => !e.payed))
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function addHistory(historia) {
    await api.post("/cargarHistoria", historia).then((response) => {
      if (response) {
        alert("Historia cargada correctamente");
      }
    });
  }

  return (
    <ApiContext.Provider
      value={{
        addHistory,
        createPacient,
        consultasFiltradas,
        setconsultasFiltradas,
        consultasImpagas,
        setConsultasImpagas,
        searchPacient,
        refreshPacient,
        isUserLogged,
        setIsUserLogged,
        pacienteBuscado,
        setPacienteBuscado,
        showNavBar,
        setShowNavBar,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
