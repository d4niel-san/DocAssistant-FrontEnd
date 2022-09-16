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
import avatar from "./images/logo2.png";
import { listItems } from "./ListItems";
import * as styles from "./SideBarStyles.jsx";

//#endregion

export const SideList = () => {  
  const { setPacienteBuscado } = useContext(ApiContext);
  
  const handleClick = () => {
    setPacienteBuscado(null)
  }

  return (
    <>
    <CssBaseline />
    <Box sx={styles.menuSliderContainer} component="div">
      <Avatar sx={styles.avatar} src={avatar} alt="Meliapp" />
      <Divider />
      <List>
        {listItems.map((listItem, index) => (
          <Link
          key={index}
            to={listItem.navigate}
            style={{ textDecoration: "none" }}
          >
            <ListItem button onClick={handleClick} sx={styles.mouseStates} >
              <ListItemIcon>{listItem.listIcon}</ListItemIcon>
              <ListItemText primary={listItem.listText} sx={styles.listItem} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  </>
)
}
