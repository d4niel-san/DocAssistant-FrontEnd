import generalTheme from "../../theme/generalTheme";

export const gButton = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const menuSliderContainer = {
  width: 250,
  backgroundColor: generalTheme.palette.primary.main,
  height: "100%",
};

export const gUser = { justifyContent: "center", display: "grid" };

export const avatar = {
  margin: "0.5rem auto",
  padding: "1rem",
  width: "50%",
  height: "20%",
  filter: "invert(1)",
};

export const listItem = {
  color: "primary.contrastText",
};

export const navBar = {
  backgroundColor: "primary.main",
  position: "absolute",
  width: "100%",
  zIndex: "100",
};

export const mouseStates = {
  "&:hover": { backgroundColor: "primary.dark" },
  "&:active": { backgroundColor: "primary.light" },
};
