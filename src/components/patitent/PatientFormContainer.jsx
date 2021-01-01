import React, { useState } from "react";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import PatientStepContent from "./PatientStepContent";

const list = "Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam fringilla mi vestibulum sem scelerisque at consectetur nisi auctor".split(
  " "
);



const useStyles = makeStyles((theme) => ({
  stepper: {
   margin: theme.spacing(4)
  },
  step: {
    margin: "0 64px"
  },

}));


const defaultState = {
  city: "",
  email: "",
  firstName: "",
  lastName: "",
  occupation: "",
};

list.forEach((w) => {
  defaultState[w] = false;
});

const steps = ["Patient Information", "Medical history", "Confirm"];

const PatientFormContainer = () => {
  const classes = useStyles()
  const [values, setValues] = useState(defaultState);
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prevState) => prevState + 1);
  };

  const prevStep = () => {
    setActiveStep((prevState) => prevState - 1);
  };

  const handleChange = (input) => (evt) => {
    const { value } = evt.target;
    setValues({ ...values, [input]: value });
  };

  const handleCheckbox = (evt) => {
    const { checked, name } = evt.target;
    setValues({ ...values, [name]: checked });
  };

  const handleSubmit = (evt) => {
    evt.prevenDefault();
    console.log("submit");
  };

  return (
    <>
      <Grid className={classes.stepper} container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Stepper  activeStep={activeStep} alternativeLabel>
            {steps.map((step, idx) => (
              <Step key={idx}>
                <StepLabel className={classes.step}>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <form onSubmit={handleSubmit}>
            <PatientStepContent
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              handleCheckbox={handleCheckbox}
              handleSubmit={handleSubmit}
              stepIndex={activeStep}
              values={values}
            />
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default PatientFormContainer;
