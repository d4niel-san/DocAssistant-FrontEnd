const icon = {
  color: "rgb(221, 108, 142)",
};

const colorSecundario = "#F6E1E6";

function buttonUnstyled(backgroundColor) {
  return {
    color: "RGB(119, 121, 133)",
    backgroundColor: backgroundColor || colorSecundario,
    border: "none",
    fontSize: 16,
    textDecoration: "underline",
  };
}

const parentDiv = {
  display: "flex",
  justifyContent: "center",
};

export { buttonUnstyled, parentDiv, icon };
