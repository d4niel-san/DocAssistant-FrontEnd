import { Checkbox } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { ApiContext } from "../../../context/apiContext";

export const ReactiveCheckBox = (props) => {
  const { payed, Id } = props;

  const [disabler, setDisabler] = useState(true);
  const { consultasImpagas } = useContext(ApiContext);

  //console.log("elemento: ",date, amount, payed, Id)

  const handleClick = () => {
    setDisabler(!disabler);
    const auxConsulta = consultasImpagas.map((e) => {
      if (e.Id === Id) {
        return { ...e, payed: !e.payed };
      }
      return e;
    });
    console.log(auxConsulta);
  };

  return (
    <Checkbox checked={!disabler} onClick={handleClick} color={"pinkMain"} />
  );
};
