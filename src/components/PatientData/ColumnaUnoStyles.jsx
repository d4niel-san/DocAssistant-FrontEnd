import { pink } from "@mui/material/colors";

const colorSecundario = "#F6E1E6";

const avatar = {
  position: "relative",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  width: "80%",
  left: "10px",
  margin: "0 auto",
};

const removeBullet = { listStyleType: "none" };

const columnaUno = {
  flexBasis: "40%",
  position: "relative",
  maxWidth: "275PX",
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
  height: "50px",
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
  align: "center",
  color: pink[800],
  "&.Mui-checked": {
    color: pink[600],
  },
};
export {
  checkBox,
  typoNormal,
  avatar,
  gridContainer,
  gridUno,
  removeBullet,
  typoPrimary,
  ulStyle,
  columnaUno,
  gridDos,
  gridTres,
  gridCuatro,
};
