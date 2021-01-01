import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";


import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import { outerTheme, ButtonStyles } from "../utils";

import TitleBar from "../TitleBar";



const list = "Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam fringilla mi vestibulum sem scelerisque at consectetur nisi auctor".split(
  " "
);

const labelPlacement = "end";

const MedicalHistory = (props) => {
 


    return (
      <ThemeProvider theme={outerTheme}>
        <>
        <TitleBar text="Medidal History" />
            {list.map((word, idx) => {
              return (
                <FormControl component="fieldset" key={idx}>
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value={word}
                      control={
                        <Checkbox
                          color="primary"
                          onChange={props.handleCheckbox}
                          name={word}
                        />
                      }
                      label={word}
                      labelPlacement={labelPlacement}
                    />
                  </FormGroup>
                </FormControl>
              );
            })}

            <Button
              color="secondary"
              variant="contained"
              onClick={props.prevStep}
              style={ButtonStyles.button}
            >
              Back
            </Button>

            <Button
              color="primary"
              variant="contained"
              onClick={props.nextStep}
              style={ButtonStyles.button}
            >
              Continue
            </Button>
        </>
      </ThemeProvider>
    );
  }




export default MedicalHistory;
