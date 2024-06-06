import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { sidebarData } from "../data";

export const mainListItems = (
  <React.Fragment>
    {sidebarData.map((item, index) => (
      <ListItemButton component={Link} to={item.path} key={index}>
        <ListItemIcon>
          <item.icon />
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>
    ))}
  </React.Fragment>
);
