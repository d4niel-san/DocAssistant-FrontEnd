import { useContext, useEffect } from "react";
import { ApiContext } from "../context/apiContext";
import jwt_decode from "jwt-decode";

export const GoogleButton = () => {
  const { setGUserLogged } = useContext(ApiContext);

  function handleCallbackResponse(response) {
    const userObject = jwt_decode(response.credential);
    console.log("GoogleUser: ", userObject);
    setGUserLogged(jwt_decode(response.credential));
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
    /* global google */

    google.accounts.id.initialize({
      client_id:
        "1095309654407-8oqjrjf7ra6d9t1h9us9dqt9ebl4f2eq.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  });

  return <div id="signInDiv" />;
};
