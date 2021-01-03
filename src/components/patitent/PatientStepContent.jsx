import React from "react";

import PatientForm from "./PatientForm";
import MedicalHistory from "./MedicalHistory";
import Confirmation from "./Confirmation";
import Success from "./Success";






const PatientStepContent = (props) => {

  switch (props.stepIndex) {
    case 0:
      return (
        <PatientForm
          nextStep={props.nextStep}
          handleChange={props.handleChange}
          values={props.values}
        />

      );
    case 1:
      return (
        <MedicalHistory
          nextStep={props.nextStep}
          prevStep={props.prevStep}
          handleChange={props.handleChange}
          values={props.values}
          handleCheckbox={props.handleCheckbox}
        />
      );

    case 2:
      return (
        <Confirmation 
        nextStep={props.nextStep} 
        prevStep={props.prevStep} 
        handleChange={props.handleChange}
        values={props.values} 
        />

      );
    case 3:
      return <Success />;
    default:
      return null;
  }
};

export default PatientStepContent;
