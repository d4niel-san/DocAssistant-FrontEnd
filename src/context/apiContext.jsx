import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

export const ApiContext = createContext(0);

export const Context = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [userLogged, setUserLogged] = useState();
  const [showNavBar, setShowNavBar] = useState(true);
  let navigate = useNavigate();

  return (
    <ApiContext.Provider
      value={{
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
