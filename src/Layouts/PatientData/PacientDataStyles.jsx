const colorPrimario = "rgb(248,181,197)";
const colorSecundario = "#F6E1E6";

const background = {
  height: "120vh",
  backgroundColor: "#f1f1f1",
  paddingTop: "20px",
};

const container = {
  minWidth: "180px",
  padding: "20px 20px",

  /* position: "relative",
  display: "flex", */
  /* alignItems: "center",
  columnGap: "40px", 
  borderTop: "40px solid white",
  borderTopColor: colorPrimario, */
  backgroundColor: "white",
}

const columnContainer = {
  minWidth: "180px",
  position: "relative",
  display: "flex",
  alignItems: "center",
  columnGap: "40px",
  padding: "20px 10px",
  borderTop: "40px solid white",
  borderTopColor: colorPrimario,
  backgroundColor: "white",
};

const typoSecondary = {};

const nombre = {
  fontSize: 36,
  fontWeight: 900,
  display: "inline",
  color: "rgb(221, 108, 142)",
};

const apellido = {
  fontWeight: 300,
  fontSize: 36,
  display: "inline",
  color: "rgb(221, 108, 142)",
  marginLeft: 1,
};

const ocupacion = { fontSize: 16 };

export {
  columnContainer,
  nombre,
  apellido,
  ocupacion,
  background,
  container,
  typoSecondary,
  colorPrimario,
  colorSecundario,
};
