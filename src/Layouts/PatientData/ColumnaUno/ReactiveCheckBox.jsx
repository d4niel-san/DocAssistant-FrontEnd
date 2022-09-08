import { Checkbox } from "@mui/material";
import { useState } from "react";

export const ReactiveCheckBox = (props) => {
  const [disabler, setDisabler] = useState(true);
  console.log("props: ", props);

  const handleClick = () => {
    setDisabler(!disabler);
    console.log(props.payed);
    props.payed = !props.payed;
  };

  return (
    <Checkbox checked={!disabler} onClick={handleClick} color={"pinkMain"} />
  );
};
