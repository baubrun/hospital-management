import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import NavMenu from "./navMenu/NavMenu"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
//   offset: theme.mixins.toolbar,
}));

const NavBar = () => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);



  return (
    <>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={() => setOpenMenu(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <NavMenu open={openMenu} close={setOpenMenu}/>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
};

export default NavBar;
