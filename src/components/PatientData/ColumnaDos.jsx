import { Typography } from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";
import * as styles from "./ColumnaDosStyles";
import * as placeHolder from "./Placeholders";

export const ColumnaDos = () => {
  const { pacienteBuscado } = useContext(ApiContext);

  return (
    <div style={styles.columnaDos}>
      <Typography
        sx={{
          fontSize: 34,
          fontFamily: "Helvetica Neue",
          fontWeight: 700,
          display: "inline",
          color: "rgb(221, 108, 142)",
        }}
      >
        {pacienteBuscado.FirstName}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Helvetica Neue",
          fontSize: 34,
          display: "inline",
          color: "rgb(221, 108, 142)",
          marginLeft: 1,
        }}
      >
        {pacienteBuscado.LastName}
      </Typography>
      <Typography sx={{ fontSize: 18 }}>{placeHolder._ocupacion}</Typography>
      <Typography>{placeHolder._dni}</Typography>
      <Typography>{placeHolder._celular}</Typography>
      <Typography>{placeHolder._mail}</Typography>
      <Typography>{placeHolder._historiaClinica}</Typography>
      <Typography>{placeHolder._notaUno}</Typography>
      <Typography>{placeHolder._fechaUno}</Typography>
      <Typography>{placeHolder._fechaDos}</Typography>
      <Typography>{placeHolder._notaDos}</Typography>
    </div>
  );
};
