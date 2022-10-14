const titulo = {
  fontWeight: 700,
  fontSize: 20,
};

const border = {
  borderWidth: "4px",
  borderStyle: "solid",
  borderColor: "#040303a1",
  padding: "5px",
  marginBottom: "15px",
  height: "250px",
  overflow: "auto",
};

const colorSecundario = "#F6E1E6";

const historiaClinicaId = {
  fontWeight: 700,
  fontSize: 20,
  color: "rgb(221, 108, 142)",
  marginRight: "5px",
};

const historiaClinicaIdData = {
  fontWeight: 100,
  fontSize: 20,
  color: "rgb(227, 122, 142)",
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

const modalEmptyConsultas = {
  position: "fixed",
  bottom: 0,
  left: 0,
  padding: "20px 50px",
  borderRadius: "15px",
  margin: "25px",
  boxShadow: "0 20px 30px rgb(0 0 0 / 25%)",
  background: "#DD6C8E",
  width: "50%",
  color: "white",
};

export {
  historiaClinicaId,
  historiaClinicaIdData,
  border,
  titulo,
  hr,
  grid,
  div1,
  div2,
  modalEmptyConsultas,
};
