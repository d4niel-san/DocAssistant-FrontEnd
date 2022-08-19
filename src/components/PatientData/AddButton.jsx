import { ButtonUnstyled } from "@mui/base";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import * as styles from "./AddButtonStyles";

const AddButton = ({ texto, backgroundColor }) => {
  



  return (
    <div style={styles.parentDiv}>
      <AddCircleIcon sx={styles.icon} fontSize="large" />
      <ButtonUnstyled size="small" variant="text" style={styles.buttonUnstyled(backgroundColor)}>
        {texto}
      </ButtonUnstyled>
    </div>
    
  );
};

export default AddButton;
