/* import { useState } from "react";
import { Calendar as CalendarComp } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { GoogleLogin } from "react-google-login";

export const Calendar = () => {
  google.accounts.id.initialize(IdConfiguration);

  const responseGoogle = (response) => {
    console.log(response);
  };

  const responseError = (error) => {
    console.log(error);
  };

  return (
    <div>
      <div
        id="g_id_onload"
        data-client_id="YOUR_CLIENT_ID"
        data-callback="handleCredentialResponse"
      ></div>
      <div class="g_id_signin" data-type="standard"></div>
      {<GoogleLogin
        clientId="1095309654407-8oqjrjf7ra6d9t1h9us9dqt9ebl4f2eq.apps.googleusercontent.com"
        buttonText="Sign In & Authorize Calendar"
        onSuccess={responseGoogle}
        onFailure={responseError}
        cookiePolicy={"single_host_origin"}
        responseType="code"
        accessType="offline"
        scope="openid email profile https://www.googleapis.com/auth/calendar"
      />}
    </div>
  );
};

export const CalendarOld = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <CalendarComp onChange={onChange} value={value} />
    </div>
  );
};
 */
