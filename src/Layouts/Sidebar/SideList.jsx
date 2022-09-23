//#region Imports
import {
  Avatar,
  Box,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../../context/apiContext";
import avatar from "./images/logo2.png";
import { listItems } from "./ListItems";
import jwt_decode from "jwt-decode";
import * as styles from "./SideBarStyles.jsx";

//#endregion

export const SideList = () => {
  const { GUserLogged, setGUserLogged, setPacienteBuscado } =
    useContext(ApiContext);

  const handleClick = () => {
    setPacienteBuscado(null);
  };

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

  return (
    <>
      <CssBaseline />
      <Box sx={styles.menuSliderContainer} component="div">
        {GUserLogged ? (
          <div style={styles.gUser}>
            <img
              src={GUserLogged.picture}
              alt=""
              style={{ justifySelf: "center" }}
            ></img>
            <h3>{GUserLogged.name}</h3>
          </div>
        ) : (
          <Avatar sx={styles.avatar} src={avatar} alt="Meliapp" />
        )}
        <Divider />
        <List>
          {listItems.map((listItem, index) => (
            <Link
              key={index}
              to={listItem.navigate}
              style={{ textDecoration: "none" }}
            >
              <ListItem button onClick={handleClick} sx={styles.mouseStates}>
                <ListItemIcon>{listItem.listIcon}</ListItemIcon>
                <ListItemText
                  primary={listItem.listText}
                  sx={styles.listItem}
                />
              </ListItem>
            </Link>
          ))}
        </List>
        <div style={styles.gButton}>
          <div id="signInDiv" />
        </div>
      </Box>
    </>
  );
};
