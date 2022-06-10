import { createTheme } from "@mui/material/styles";
import { blue, grey, teal } from "@mui/material/colors";
import { alpha } from "@mui/material";

const generalTheme = createTheme({
  palette: {
    primary: {
      main: teal[300],
      contrastText: grey[100],
    },
    secondary: {
      main: teal[900],
      contrastText: grey[900],
    },
    info: {
      main: alpha(blue[500], 0.9),
    },
    third: {
      main: alpha(teal[900], 0.9),
    },
    text: {
      primary: grey[800],
    },
    backWhite: {
      main: "#fff",
    },
  },
});

export default generalTheme;
