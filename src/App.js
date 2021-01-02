import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./css/theme";

import PatientFormContainer from "./components/patitent/PatientFormContainer";
import NotFound from "./views/NotFound";
import Rooms from "./components/rooms/Rooms"

import NavBar from "./components/NavBar"
import { listRooms } from "./redux/roomsSlice";
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(listRooms());
  // }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Switch>
        <Route exact={true} path="/" component={PatientFormContainer} />
        <Route exact={true} path="/rooms" component={Rooms}/>
        <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
