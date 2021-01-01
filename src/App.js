import React from "react";
import PatientFormContainer from "./components/patitent/PatientFormContainer";
import { ThemeProvider } from "@material-ui/core/styles";
import {theme} from "./css/theme"
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      
      <PatientFormContainer />
    </ThemeProvider>
  );
};

export default App;
