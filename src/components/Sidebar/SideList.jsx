import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import avatar from "./images/logo2.png";
import { listItems } from "./ListItems";
import styles from "./styles.module.css";

export const sideList = () => (
  <Box className={styles.menuSliderContainer} component="div">
    <Avatar className={styles.avatar} src={avatar} alt="Meliapp" />
    <Divider />
    <List>
      {listItems.map((listItem, index) => (
        <ListItem className={styles.listItem} button key={index}>
          <ListItemIcon className={styles.listItem}>
            {listItem.listIcon}
          </ListItemIcon>
          <ListItemText primary={listItem.listText} />
        </ListItem>
      ))}
    </List>
  </Box>
);
