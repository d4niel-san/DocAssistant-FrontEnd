import { Button } from "@mui/material";
import { useContext } from "react";
import { ApiContext } from "../context/apiContext";

export const GoogleButton = () => {
  const { GUserLogged, setGUserLogged } = useContext(ApiContext);

  return !GUserLogged ? (
    <div id="signInDiv" />
  ) : (
    <Button
      size="small"
      variant="contained"
      onClick={() => setGUserLogged(null)}
      style={{
        color: "RGB(0, 138, 122)",
        backgroundColor: "#F6E1E6",
        border: "none",
        fontSize: 16,
      }}
    >
      Google Sign Out
    </Button>
  );
};
