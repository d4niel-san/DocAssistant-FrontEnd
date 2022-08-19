import { pink } from "@mui/material/colors";

const colorSecundario = "#F6E1E6";

const removeBullet = { listStyleType: "none" };

const columnaUno = {
  flexBasis: "40%",
  position: "relative",
  maxWidth: "250PX",
  alignSelf: "flex-start",
  marginTop: "10px",
  backgroundColor: colorSecundario,
};

const gridContainer = {
//  bottom: "120px",
  position: "relative",
  paddingBottom: "100px",
  display: "grid",
  gridTemplateColumns: "40% 40% 20%",
  gridcemplateRows: "20% 80%",
  gridcolumnGap: "0px",
  gridbowGap: "0px",
  rowGap: "2px",
};

const gridA = {
  gridArea: "1 / 1 / 2 / 2",
  height: "50px",
  placeItems: "center",
  display: "grid",
};

const gridB = {
  gridArea: "1 / 2 / 2 / 3",
  borderLeft: "2px solid white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const gridC = {
  borderLeft: "2px solid white",
  gridArea: "1 / 3 / 2 / 4",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
};

const gridD = {
  borderTop: "2px solid white",
  gridArea: "2 / 1 / 3 / 2",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

const gridE = {
  gridArea: "2 / 2 / 3 / 3",
  display: "flex",
  flexDirection: "column",
  borderTop: "2px solid white",
};

const gridF = {
  gridArea: "2 / 3 / 3 / 4",
  display: "flex",
  flexDirection: "column",
  borderTop: "2px solid white",
};

const gridG = {
  gridArea: "3 / 1 / 4 / 4",
  /*   display: "flex",
  justifyContent: "center", */
};

const ulStyle = {
  align: "center",
  padding: 0,
  margin: 0,
};

const typoPrimary = {
  color: "rgb(221, 108, 142)",
  fontWeight: "bold",
};

const typoNormal = {
  lineHeight: "42px",
};

const checkBox = {
  display: "flex",
  align: "center",
  justifyContent: "center",
  color: pink[800],
  listStyleType: "none",
  "&.Mui-checked": {
    color: pink[600],
  },
};
export {
  checkBox,
  typoNormal,
  gridContainer,
  gridA,
  gridB,
  gridC,
  gridD,
  gridE,
  gridF,
  gridG,
  removeBullet,
  typoPrimary,
  ulStyle,
  columnaUno,
};
