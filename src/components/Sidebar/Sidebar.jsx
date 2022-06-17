//#region Imports
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { SideList } from "./SideList";
import { navBar, mouseStates } from "./SideBarStyles";

//#endregion

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  return (
    <>
      <CssBaseline />

      <Box component="nav" sx={navBar}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleSlider} sx={mouseStates}>
              <Menu />
            </IconButton>
            <Typography>Melanie Nutricion App</Typography>
            <Drawer open={open} anchor="left" onClose={toggleSlider}>
              <SideList />
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
