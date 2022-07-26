// #region Imports
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AddPacient } from "./components/AddPacient/AddPacient";
import { Calendar } from "./components/Calendar/Calendar";
import { PacientData } from "./components/PatientData/PacientData";
import { QueryPacient } from "./components/QueryPacient/QueryPacient";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { SignIn } from "./components/SignIn/SignIn";
import { ApiContext } from "./context/apiContext";
import generalTheme from "./theme/generalTheme";
import "./App.css";

//#endregion

const App = () => {
  const { showNavBar } = useContext(ApiContext);

  return (
    <>
      <ThemeProvider theme={generalTheme}>
        <CssBaseline />
        {showNavBar && <Sidebar />}
        <Routes>
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/addpacient" element={<AddPacient />} />
          <Route path="/queryPacient" element={<QueryPacient />} />
          <Route path="/Pacient" element={<PacientData />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/*" element={<SignIn />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
