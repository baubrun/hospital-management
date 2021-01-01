import React, { userEffect } from "react";

import PatientForm from "./PatientForm";
import MedicalHistory from "./MedicalHistory";
// import HospitalName from "./HospitalName";
import Confirmation from "./Confirmation";
import Success from "./Success";




const PatientStepContent = (props) => {
  switch (props.stepIndex) {
    case 0:
      return (
        <PatientForm
          nextStep={() => props.nextStep()}
          handleChange={() => props.handleChange()}
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

    // case 2:
    //   return (
    //     <HospitalName
    //       nextStep={this.nextStep}
    //       prevStep={this.prevStep}
    //       handleChange={this.handleChange}
    //       values={values}
    //     />
    //   );

    case 3:
      return (
        <Confirmation 
        nextStep={props.nextStep} 
        prevStep={props.prevStep} 
        values={props.values} />
      );
    case 4:
      return <Success />;
    default:
      return null;
  }
};

export default PatientStepContent;
