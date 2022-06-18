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
  },
  {
    listIcon: <PersonSearch />,
    listText: "Consultar Datos Paciente",
  },
  {
    listIcon: <AddCard />,
    listText: "Agendar Consulta",
  },
  {
    listIcon: <List />,
    listText: "Listado de Consultas",
  },
  {
    listIcon: <Ballot />,
    listText: "Listado de Pacientes",
  },
];
