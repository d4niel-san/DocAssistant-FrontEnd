export const Box = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const Avatar = {
  m: 1,
  bgcolor: "secondary.main",
};

export const AddPacientText = {
  color: "secondary.contrastText",
  marginBottom: "10px",
};

export const Container = {
  backgroundColor: "backWhite.main",
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
