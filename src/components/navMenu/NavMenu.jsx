import React from "react";

import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import { navItems } from "./navItems";


const NavMenu = (props) => {
  return (
    <>
    <Drawer 
    open={props.open}
    onClose={() => props.close(false)}
    >
      {navItems.map((item, idx) => {
        return (
            <>
          <List key={idx}>
            <ListItem>
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name}/>
            </ListItem>
          </List>
          <Divider />
          </>
        );
      })}
      </Drawer>
    </>
  );
};

export default NavMenu;
