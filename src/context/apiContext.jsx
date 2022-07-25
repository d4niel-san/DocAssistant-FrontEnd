import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

export const ApiContext = createContext(0);

export const Context = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [pacienteBuscado, setPacienteBuscado] = useState();
  const [showNavBar, setShowNavBar] = useState(true);
  let navigate = useNavigate();

  async function createPacient(pacient) {
    await api
      .post("/pacientes", pacient)
      .then((response) => {
        if (response) alert("Paciente Agregado a la base de datos");
        //navigate('/signIn', { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function searchPacient(patient) {
    console.log(patient);
    await api
      .post("/getPaciente", patient)
      .then((response) => {
        if (response) {
          setPacienteBuscado(response.data[0]);
          console.log("Paciente encontrado: ", response.data[0]);
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
        searchPacient,
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
