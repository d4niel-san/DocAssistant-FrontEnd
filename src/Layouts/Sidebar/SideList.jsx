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
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../../context/apiContext";
import { GoogleButton } from "../../google/google";
import avatar from "./images/logo2.png";
import { listItems } from "./ListItems";
import * as styles from "./SideBarStyles.jsx";

//#endregion

export const SideList = () => {
  const { GUserLogged, setPacienteBuscado } = useContext(ApiContext);

  const handleClick = () => {
    setPacienteBuscado(null);
  };

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
          <GoogleButton />
        </div>
      </Box>
    </>
  );
};
