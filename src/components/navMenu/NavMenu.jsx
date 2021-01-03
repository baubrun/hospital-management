import React from "react";
import { Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core/styles";

import { navItems } from "./navItems";

const useStyles = makeStyles((theme) => ({
  links: {
    textDecoration: "none",
  },
}));

const NavMenu = (props) => {
  const classes = useStyles();

  return (
    <>
      <Drawer open={props.open} onClose={() => props.close(false)}>
        {navItems.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              <List >
                <ListItem>
                  <Link to="/rooms" className={classes.links}>
                    <ListItemIcon color={item.color}>{item.icon}</ListItemIcon>
                  </Link>
                  <ListItemText primary={item.name}/>
                </ListItem>
              </List>
              <Divider />
            </React.Fragment>
          );
        })}
      </Drawer>
    </>
  );
};

export default NavMenu;
