import { ButtonUnstyled } from "@mui/base";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import * as styles from "./AddButtonStyles";

const AddButton = (props) => {

  const handleClick = () => {
    props.function()
  };

  return (
    <div style={styles.parentDiv}>
      <AddCircleIcon sx={styles.icon} fontSize="large" onClick={handleClick} />
      <ButtonUnstyled size="small" variant="text" onClick={handleClick} style={styles.buttonUnstyled(props.backgroundColor)}>
        {props.texto}
      </ButtonUnstyled>
    </div>
    
  );
};

export default AddButton;
