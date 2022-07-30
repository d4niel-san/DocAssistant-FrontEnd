import { ButtonUnstyled } from "@mui/base";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddButton = ({ texto, backgroundColor }) => {
  const icon = {
    color: "rgb(221, 108, 142)",
  };
  const colorSecundario = "#F6E1E6";

  const buttonUnstyled = {
    color: "RGB(119, 121, 133)",
    backgroundColor: backgroundColor || colorSecundario,
    border: "none",
    fontSize: 16,
    textDecoration: "underline",
  };

  return (
    <>
      <AddCircleIcon sx={icon} fontSize="large" />
      <ButtonUnstyled size="small" variant="text" style={buttonUnstyled}>
        {texto}
      </ButtonUnstyled>
    </>
  );
};

export default AddButton;
