import { Checkbox } from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../../../context/apiContext";

export const ReactiveCheckBox = (props) => {
  const { payed, Id } = props;

  const { consultasImpagas, setConsultasImpagas } = useContext(ApiContext);

  const handleClick = () => {
    const auxConsulta = consultasImpagas.map((e) => {
      if (e.Id === Id) {
        return { ...e, payed: !e.payed };
      }
      return e;
    });
    setConsultasImpagas(auxConsulta);
    console.log(auxConsulta);
  };

  return <Checkbox checked={payed} onClick={handleClick} color={"pinkMain"} />;
};
