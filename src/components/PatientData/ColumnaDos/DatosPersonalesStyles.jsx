const titulo = {
  //fontFamily: "Helvetica Neue",
  fontWeight: 900,
  fontSize: 20,
};

const colorSecundario = "#F6E1E6";

const hr = {
  height: "3px",
  borderWidth: 0,
  color: colorSecundario,
  backgroundColor: colorSecundario,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: " repeat(3, 1fr)",
  gridColumnGap: "0px",
  gridRowGap: "20px",
};

const div1 = { gridArea: "1 / 1 / 2 / 2" };
const gridLabel = {
  fontWeight: 700,
  fontSize: 16,
  color: "rgb(221, 108, 142)",
};
const gridData = {
  fontSize: 16,
};
const div2 = { gridArea: "1 / 2 / 2 / 3" };
const div3 = { gridArea: "2 / 1 / 3 / 2" };
const div4 = { gridArea: "2 / 2 / 3 / 3" };
const div5 = { gridArea: "3 / 1 / 4 / 2" };
const div6 = { gridArea: "3 / 2 / 4 / 3" };

export {
  gridData,
  gridLabel,
  titulo,
  hr,
  grid,
  div1,
  div2,
  div3,
  div4,
  div5,
  div6,
};
