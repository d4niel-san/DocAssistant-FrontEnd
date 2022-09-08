import { ButtonUnstyled } from "@mui/base";
import * as styles from "./AddButtonStyles";
import SaveIcon from "@mui/icons-material/Save";

export const SaveButton = (props) => {
  const {} = props;
  const handleClick = () => {
    props.function();
  };

  return (
    <div style={styles.parentDiv}>
      <SaveIcon sx={styles.icon} fontSize="large" onClick={handleClick} />
      <ButtonUnstyled
        size="small"
        variant="text"
        onClick={handleClick}
        style={styles.buttonUnstyled(props.backgroundColor)}
      >
        {props.texto}
      </ButtonUnstyled>
    </div>
  );
};
