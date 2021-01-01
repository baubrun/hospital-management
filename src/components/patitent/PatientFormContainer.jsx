import React, { useState } from "react";

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PatientStepContent from './PatientStepContent';

const list = "Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam fringilla mi vestibulum sem scelerisque at consectetur nisi auctor".split(
  " "
);

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


const steps = ["name", "medical history", "confirmation"]


const PatientFormContainer = () => {
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
    setValues({...values, [input]: value });
  };

  const handleCheckbox = (evt) => {
    const { checked, name } = evt.target;
    setValues({...values, [name]: checked });
  };

  return (
    <>
    <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, idx) => (
          <Step key={idx}>
            <StepLabel>{label}</StepLabel>
            <PatientStepContent
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            handleCheckbox={handleCheckbox}
            values={values}
            />
          </Step>
        ))}

      </Stepper>
    </>
  )
}



export default PatientFormContainer;
