import { Checkbox } from "@mui/material";
import { useState } from "react";

export const ReactiveCheckBox = ({element}) => {
  const [disabler, setDisabler] = useState(true);
  console.log("element: ",element)
  
  const handleClick = () => {
    setDisabler(!disabler);
    element = !element
  };

  return (
    <Checkbox checked={!disabler} onClick={handleClick} color={"pinkMain"} />
  );
};
