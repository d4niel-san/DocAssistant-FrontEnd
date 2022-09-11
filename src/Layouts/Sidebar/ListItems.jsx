import {
  AddCard,
  Ballot,
  List,
  PersonAddAlt1,
  PersonSearch,
} from "@mui/icons-material";

export const listItems = [
  {
    listIcon: <PersonAddAlt1 />,
    listText: "Agregar Paciente",
    navigate: "/addpacient",
  },
  {
    listIcon: <PersonSearch />,
    listText: "Buscar Paciente",
    navigate: "/queryPacient",
  },
  {
    listIcon: <AddCard />,
    listText: "Agendar Consulta",
    navigate: "/addConsulta",
  },
  {
    listIcon: <List />,
    listText: "Listado de Consultas",
    navigate: "",
  },
  {
    listIcon: <Ballot />,
    listText: "Listado de Pacientes",
    navigate: "",
  },
];
