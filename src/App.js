import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./css/theme";
import NavBar from "./components/NavBar"
import CssBaseline from '@material-ui/core/CssBaseline';


import PatientFormContainer from "./components/patient/patientForm/PatientFormContainer";
import NotFound from "./views/NotFound";
import Rooms from "./components/rooms/Rooms"
import PatientContainer from "./components/patient/PatientContainer"


const App = () => {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Switch>
        <Route exact={true} path="/" component={PatientFormContainer} />
        <Route exact={true} path="/rooms" component={Rooms}/>
        <Route exact={true} path="/patients" component={PatientContainer}/>
        <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
