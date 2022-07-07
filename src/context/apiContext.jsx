import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

export const ApiContext = createContext(0);

export const Context = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [userLogged, setUserLogged] = useState();
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
    await api;
  }

  return (
    <ApiContext.Provider
      value={{
        createPacient,
        isUserLogged,
        setIsUserLogged,
        userLogged,
        setUserLogged,
        showNavBar,
        setShowNavBar,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
