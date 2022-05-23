import { createContext } from "react";
//import api from "./api";

export const ApiContext = createContext(0);

export const Context = ({ children }) => {
  return <ApiContext.Provider value={{}}>{children}</ApiContext.Provider>;
};
