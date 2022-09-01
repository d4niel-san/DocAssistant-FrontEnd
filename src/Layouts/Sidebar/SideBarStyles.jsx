import generalTheme from "../../theme/generalTheme";

const menuSliderContainer = {
  width: 250,
  backgroundColor: generalTheme.palette.primary.main,
  height: "100%",
};

const avatar = {
  margin: "0.5rem auto",
  padding: "1rem",
  width: "50%",
  height: "20%",
  filter: "invert(1)",
};

const listItem = {
  color: "primary.contrastText",
};

const navBar = {
  backgroundColor: "primary.main",
  position: "absolute",
  width: "100%",
  zIndex: "100",
};

const mouseStates = {
  "&:hover": { backgroundColor: "primary.dark" },
  "&:active": { backgroundColor: "primary.light" },
};

export { menuSliderContainer, avatar, listItem, navBar, mouseStates };
