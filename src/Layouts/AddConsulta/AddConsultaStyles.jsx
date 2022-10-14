export const Box = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const Avatar = {
  m: 1,
  //bgcolor: "secondary.main",
  bgcolor: "primary.main",
};

export const AddPacientText = {
  color: "secondary.contrastText",
  marginBottom: "10px",
};

export const typoInblock = {
  display: "inline-block",
  ...AddPacientText,
};

export const Container = {
  //backgroundColor: "backWhite.main",
  backgroundColor: "#f1f1f1",
  padding: "25px 50px !important",
  /* minHeight: "350px", */
};

export const background = {
  backgroundImage: "url(https://source.unsplash.com/random)",
  backgroundRepeat: "no-repeat",
  backgroundColor: (t) =>
    t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  height: "100vh",
};

export const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "1fr",
  gridColumnGap: "0px",
  gridRowGap: "0px",
};

export const gridA = { gridArea: "1 / 1 / 2 / 2" };
export const gridB = {
  gridArea: "1 / 2 / 2 / 3",
  justifyContent: "end",
  display: "flex",
};

export const title = {
  borderBottom: "5px solid RGB(0, 138, 122)",
  marginBottom: "7px",
  marginTop: "7px",
};

export const Button = {
  mt: 3,
  mb: 2,
};
