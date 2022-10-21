import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { filtrarConsultas } from "../Layouts/PatientData/ColumnaUno/ColumnaUnoServices";
import api from "./api";

export const ApiContext = createContext(0);

export const Context = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [GUserLogged, setGUserLogged] = useState(false);
  const [GUserToken, setGUserToken] = useState(false);
  const [pacienteBuscado, setPacienteBuscado] = useState();
  const [consultasFiltradas, setconsultasFiltradas] = useState();
  const [consultasImpagas, setConsultasImpagas] = useState();
  const [showNavBar, setShowNavBar] = useState(true);
  let navigate = useNavigate();

  /* global google */
  /*   function handleCallbackResponse(response) {
    const userObject = jwt_decode(response.credential);
    console.log("GoogleUser: ", userObject);
    setGUserLogged(jwt_decode(response.credential));
    document.getElementById("signInDiv").hidden = true;
  }
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "1095309654407-8oqjrjf7ra6d9t1h9us9dqt9ebl4f2eq.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    const client = google.accounts.oauth2.initTokenClient({
      client_id:
        "1095309654407-8oqjrjf7ra6d9t1h9us9dqt9ebl4f2eq.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/calendar.readonly",
      callback: handleCallbackResponse,
    });
    console.log("Client: ", client);

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }); */

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

  async function altaConsulta(newConsulta) {
    await api
      .post("/newConsulta", newConsulta)
      .then((response) => {
        if (response) alert("Consulta Agregada a la base de datos");
        setPacienteBuscado(null);
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
    dataPacient(User);
  };

  async function searchPacient(patient) {
    const result = await api
      .post("/getPaciente", patient)
      .then((response) => {
        if (response) {
          console.log("Paciente encontrado: ", response.data);
        }
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
    return result;
  }

  async function dataPacient(patient) {
    await api
      .post("/getPaciente", patient)
      .then((response) => {
        if (response) {
          console.log("Paciente encontrado: ", response.data);
          setPacienteBuscado(response.data);
          navigate("/Pacient", { replace: true });
          setconsultasFiltradas(filtrarConsultas(response.data.consultas));
          setConsultasImpagas(response.data.consultas.filter((e) => !e.payed));
          console.log("Paciente refresheado");
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

  async function cargarPago() {
    const consultasPagas = consultasImpagas.filter((e) => e.payed === true);
    await api.post("/pagarConsulta", consultasPagas).then((response) => {
      if (response) {
        alert("Pagos cargados");
        refreshPacient();
      }
    });
  }

  return (
    <ApiContext.Provider
      value={{
        cargarPago,
        searchPacient,
        addHistory,
        createPacient,
        consultasFiltradas,
        setconsultasFiltradas,
        consultasImpagas,
        setConsultasImpagas,
        dataPacient,
        refreshPacient,
        isUserLogged,
        setIsUserLogged,
        pacienteBuscado,
        setPacienteBuscado,
        showNavBar,
        setShowNavBar,
        altaConsulta,
        GUserLogged,
        setGUserLogged,
        GUserToken,
        setGUserToken,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
