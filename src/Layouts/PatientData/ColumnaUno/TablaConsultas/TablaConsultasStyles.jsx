
const gridContainer = {
  display: "grid",
  gridTemplateColumns: "3fr 2fr 1.5fr",
  gridTemplateRows: "1fr",
}

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
  justifyContent: "center",
  alignItems: "center",
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

const removeBullet = { listStyleType: "none" };

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



export {
  gridContainer,
  typoNormal,
  gridA,
  gridB,
  gridC,
  gridD,
  gridE,
  gridF,
  gridG,
  ulStyle,
  removeBullet,
  typoPrimary,
};
