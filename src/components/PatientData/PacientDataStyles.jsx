import { pink } from "@mui/material/colors";

const colorPrimario = "rgb(248,181,197)";
const colorSecundario = "#F6E1E6";

const background = {
  height: "100vh",
  backgroundColor: "#f1f1f1",
  paddingTop: "20px",
};

const columnContainer = {
  //maxWidth: "500px",
  //flexBasis: "30%",
  minWidth: "180px",
  position: "relative",
  display: "flex",
  alignItems: "center",
  // width: "80%",
  columnGap: "40px",
  padding: "20px 10px",
  borderTop: "40px solid white",
  borderTopColor: colorPrimario,
  backgroundColor: "white",
};

const columnaUno = {
  flexBasis: "40%",
  position: "relative",
  maxWidth: "275PX",
};

const avatar = {
  position: "relative",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  width: "80%",
  left: "10px",
  margin: "0 auto",
};

const columnaDos = {
  backgroundColor: "white",
  flexBasis: "60%",
  position: "relative",
};

const gridContainer = {
  bottom: "110px",
  position: "relative",
  paddingTop: "120px",
  paddingBottom: "100px",
  backgroundColor: colorSecundario,
  display: "grid",
  gridTemplateColumns: "70% 30%",
  gridcemplateRows: "20% 80%",
  gridcolumnGap: "0px",
  gridbowGap: "0px",
  rowGap: "2px",
};

const gridUno = {
  gridArea: "1 / 1 / 1 / 1",
  borderRight: "2px solid white",
  height: "50px"
};

const gridDos = {
  gridArea: "1 / 2 / 2 / 3",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
};
const gridTres = {
  borderTop: "2px solid white",
  gridArea: "2 / 1 / 3 / 2",
};
const gridCuatro = {
  gridArea: "2 / 2 / 3 / 3",
  display: "flex",
  flexDirection: "column",
  borderTop: "2px solid white",
};

const removeBullet = { listStyleType: "none" };

const typoNormal = {
  lineHeight: "42px",
};

const typoPrimary = {
  color: "rgb(221, 108, 142)",
  fontWeight: "bold"
}

const typoSecondary = {
}

const ulStyle = {
  align: "center",
  padding: 0,
  margin: 0,
};

const checkBox = {
  align: "center",
  color: pink[800],
  "&.Mui-checked": {
    color: pink[600],
  },
};

export {
  columnContainer,
  checkBox,
  background,
  removeBullet,
  typoNormal,
  typoPrimary,
  typoSecondary,
  avatar,
  columnaUno,
  columnaDos,
  colorPrimario,
  colorSecundario,
  gridContainer,
  gridUno,
  gridDos,
  gridTres,
  ulStyle,
  gridCuatro,
};
