const gridContainer = {
  display: "grid",
  gridTemplateColumns: "3fr 2fr 1.5fr",
  gridTemplateRows: "1fr",
};

const grid = {
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
};

const gridA = {
  gridArea: "1 / 1 / 2 / 2",
  height: "50px",
  placeItems: "center",
  display: "grid",
};

const gridB = {
  borderLeft: "2px solid white",
  gridArea: "1 / 2 / 2 / 3",
  ...grid,
};

const gridC = {
  borderLeft: "2px solid white",
  gridArea: "1 / 3 / 2 / 4",
  ...grid,
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
  ulStyle,
  removeBullet,
  typoPrimary,
};
