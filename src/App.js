// #region Imports
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ApiContext } from "./context/apiContext";
import { AddConsulta } from "./Layouts/AddConsulta/AddConsulta";
import { AddPacient } from "./Layouts/AddPacient/AddPacient";
import { PacientData } from "./Layouts/PatientData/PacientData";
import { QueryPacient } from "./Layouts/QueryPacient/QueryPacient";
import { Sidebar } from "./Layouts/Sidebar/Sidebar";
import { SignIn } from "./Layouts/SignIn/SignIn";
import generalTheme from "./theme/generalTheme";

//#endregion

const App = () => {
  const { showNavBar } = useContext(ApiContext);

  return (
    <>
      <GoogleOAuthProvider clientId="1095309654407-8oqjrjf7ra6d9t1h9us9dqt9ebl4f2eq.apps.googleusercontent.com">
        <ThemeProvider theme={generalTheme}>
          <CssBaseline />
          {showNavBar && <Sidebar />}
          <Routes>
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/addpacient" element={<AddPacient />} />
            <Route path="/queryPacient" element={<QueryPacient />} />
            <Route path="/Pacient" element={<PacientData />} />
            <Route path="/addConsulta" element={<AddConsulta />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/*" element={<SignIn />} />
          </Routes>
        </ThemeProvider>
      </GoogleOAuthProvider>
    </>
  );
};

export default App;
