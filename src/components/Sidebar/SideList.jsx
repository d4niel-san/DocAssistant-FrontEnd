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
      <List sx={styles.listItem}>
        {listItems.map((listItem, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{listItem.listIcon}</ListItemIcon>
            <ListItemText primary={listItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  </>
);
