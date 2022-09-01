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
import React from "react";
import { Link } from "react-router-dom";
import avatar from "./images/logo2.png";
import { listItems } from "./ListItems";
import * as styles from "./SideBarStyles.jsx";

//#endregion

export const SideList = () => (
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
            <ListItem button sx={styles.mouseStates}>
              <ListItemIcon>{listItem.listIcon}</ListItemIcon>
              <ListItemText primary={listItem.listText} sx={styles.listItem} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  </>
);
