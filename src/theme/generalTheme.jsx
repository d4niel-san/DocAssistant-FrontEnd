import { createTheme } from "@mui/material/styles";
import { blue, grey, teal } from "@mui/material/colors";
import { alpha } from "@mui/material";

const generalTheme = createTheme({
  //shadows: ["0px 2px 1px -1px rgba(0,0,0,0.5)"],

  palette: {
    primary: {
      main: "#008a7a",
      dark: "#00665a",
      light: "#00b8a2",
      contrastText: "rgba(255,255,255,0.7)",
    },
    secondary: {
      main: "#FFE8DA",
      contrastText: "#00665a", //"#376996",
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
      main: "#FFE8DA",
    },
  },
});

export default generalTheme;
