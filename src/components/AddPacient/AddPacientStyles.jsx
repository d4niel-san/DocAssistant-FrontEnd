const Box = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Avatar = {
  m: 1,
  bgcolor: "secondary.main",
};

const Button = {
  mt: 3,
  mb: 2,
};

const Container = {
  backgroundColor: "backWhite.main",
};

const suscriptionTextSize = {
  fontSize: 12,
  marginTop: "1rem",
};

const background = {
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

export { Avatar, suscriptionTextSize, Box, Button, Container, background };
