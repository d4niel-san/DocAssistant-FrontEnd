// #region Imports
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AddPacient } from "./Layouts/AddPacient/AddPacient";
import { Calendar } from "./Layouts/Calendar/Calendar";
import { PacientData } from "./Layouts/PatientData/PacientData";
import { QueryPacient } from "./Layouts/QueryPacient/QueryPacient";
import { Sidebar } from "./Layouts/Sidebar/Sidebar";
import { SignIn } from "./Layouts/SignIn/SignIn";
import { ApiContext } from "./context/apiContext";
import generalTheme from "./theme/generalTheme";
import "./App.css";
import { AddConsulta } from "./Layouts/AddConsulta/AddConsulta";

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
          <Route path="/addConsulta" element={<AddConsulta />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/*" element={<SignIn />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
