import { Button } from "@mui/material";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useContext } from "react";

import { ApiContext } from "../context/apiContext";

export const GoogleButton = () => {
  const { GUserLogged, setGUserLogged } = useContext(ApiContext);
  const { setGUserToken } = useContext(ApiContext);

  const responseGoogle = (response) => {
    console.log(response);
    console.log(jwt_decode(response.credential));
    login();
    setGUserLogged(jwt_decode(response.credential));
  };

  const responseError = (response) => {
    console.log(response);
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      setGUserToken(codeResponse);
    },
    onError: (codeResponse) => console.log("Error: ", codeResponse),
    scope: "openid email profile https://www.googleapis.com/auth/calendar",
    flow: "auth-code",
  });

  return !GUserLogged ? (
    <GoogleLogin onSuccess={responseGoogle} onError={responseError} />
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
