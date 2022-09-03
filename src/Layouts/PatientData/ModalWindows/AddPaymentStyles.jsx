const modal = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7",
  zIndex: 1000,
};

const Button = {
  mt: 3,
  mb: 2,
};
const colorSecundario = "#F6E1E6";

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

export { modal, overlay, Button, gridContainer, columnaUno };
