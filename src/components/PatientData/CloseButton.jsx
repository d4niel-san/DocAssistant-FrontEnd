import { ButtonUnstyled } from "@mui/base";
import * as styles from "./CloseButtonStyles";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

const CloseButton = (props) => {
  const handleClick = () => {
    props.function();
  };

  return (
    <div style={styles.parentDiv}>
      <CancelRoundedIcon
        sx={styles.icon}
        fontSize="large"
        onClick={handleClick}
      />
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

export default CloseButton;
