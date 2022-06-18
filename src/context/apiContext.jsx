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
        if (response) console.log("Paciente Agregado a BBDD");
        //navigate('/signIn', { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
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
