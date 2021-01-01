import React, { Component } from "react";
import PatientForm from "./PatientForm";
import MedicalHistory from "./MedicalHistory";
import HospitalName from "./HospitalName";
import Confirmation from "./Confirmation";
import Success from "./Success";

const list = "Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam fringilla mi vestibulum sem scelerisque at consectetur nisi auctor".split(" ")


const defaultState = {
  city: "",
  email: "",
  firstName: "",
  lastName: "",
  occupation: "",
  step: 1,

};

list.forEach(w => {
  defaultState[w] = false
})

export class PatientFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = (input) => (evt) => {
    const {value } = evt.target;
    this.setState({ [input]: value });
  };

  handleCheckbox = (evt) => {
    const {checked, name} = evt.target
    this.setState({[name]: checked})
  }

  render() {
    const { city, email, firstName, lastName, occupation, step } = this.state;
    const values = { city, email, firstName, lastName, occupation };
    switch (step) {
      case 1:
        return (
          <PatientForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <MedicalHistory
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            handleCheckbox={this.handleCheckbox}
          />
        );

      // case 4:
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
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />)
      case 4:
        return (
          <Success
          />
        );
      default:
        return null;
    }
  }
}

export default PatientFormContainer;
