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

const buttonRow = {
  display: "flex",
  justifyContent: "center",
  paddingBottom: "13px",
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
  position: "relative",
  paddingBottom: "100px",
};

export { modal, overlay, gridContainer, columnaUno, buttonRow };
