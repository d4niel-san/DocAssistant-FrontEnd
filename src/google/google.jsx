import { Button } from "@mui/material";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import api from "../context/api";
import { ApiContext } from "../context/apiContext";

export const GoogleButton = () => {
  const { GUserLogged, setGUserLogged } = useContext(ApiContext);
  const { setGUserCode } = useContext(ApiContext);
  let resp;

  const responseGoogle = (response) => {
    resp = jwt_decode(response.credential);
    login();
  };

  const responseError = (response) => {
    console.log(response);
  };

  async function createTokens(code) {
    await api
      .post("/create-tokens", code)
      .then((response) =>
        console.log("Tokens creados con exito: ", response.data)
      );
  }

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log("hols");
      setGUserCode(codeResponse);
      setGUserLogged(resp);
      console.log(codeResponse);
      console.log(resp);
      createTokens(codeResponse);
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
