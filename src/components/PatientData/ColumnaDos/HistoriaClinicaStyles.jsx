const titulo = {
  //fontFamily: "Helvetica Neue",
  fontWeight: 700,
  fontSize: 20,
};

const colorSecundario = "#F6E1E6";

const historiaClinicaId = {
  fontWeight: 700,
  fontSize: 20,
  color: "rgb(221, 108, 142)",
  marginRight: "5px",
};

const historiaClinicaIdData = {
  fontWeight: 500,
  //display: "inline",
  fontSize: 20,
  color: "RGB(227, 122, 142)",
};

const hr = {
  height: "3px",
  borderWidth: 0,
  color: colorSecundario,
  backgroundColor: colorSecundario,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "1fr",
  gridColumnGap: "0px",
  gridRowGap: "0px",
};

const div1 = { gridArea: 1 / 1 / 2 / 2 };

const div2 = {
  gridArea: 1 / 2 / 2 / 3,
  display: "flex",
  justifyContent: "right",
};

export {
  historiaClinicaId,
  historiaClinicaIdData,
  titulo,
  hr,
  grid,
  div1,
  div2,
};
