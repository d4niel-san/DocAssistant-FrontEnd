import { Checkbox } from "@mui/material";
import { useState } from "react";

export const ReactiveCheckBox = ({ checked }) => {
  const [disabler, setDisabler] = useState(true);

  const handleClick = () => {
    setDisabler(!disabler);
  };

  return (
    <Checkbox
      disabled={!disabler} //true desabilita
      checked={!disabler}
      onClick={handleClick}
    />
  );
};
