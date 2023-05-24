import Form from "./Form";
import ProfileForm from './ProfileForm';
import React from "react";
import { blurValidation, submitValidation, resetErrors, changeValidation } from "../utils/inputValidation/validation";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      date: "",
      phone: "",
      link: "",
      about: "",
      technologies: "",
      description: "",
      newForm: false,
      textareaLength: {
        about: 0,
        technologies: 0,
        description: 0,
      }
    };
  }

  handleChange = (value, field) => {
    this.setState((prev) => {
      return {
        ...prev,
        [field]: value,
        textareaLength: {
          ...prev.textareaLength,
          [field]: value.length,
        },
      };
    });
  };

  validationAfterBlur = (e) => {
    blurValidation(e.target.value, e.target.id);
  };

  handleReset = () => {
    resetErrors();
    this.setState({
      name: "",
      surname: "",
      date: "",
      phone: "",
      link: "",
      about: "",
      technologies: "",
      description: "",
      newForm: false,
      textareaLength: {
        about: 0,
        technologies: 0,
        description: 0,
      }
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    for(let el in this.state){
      submitValidation(el,this.state[el])
      if(el==='description'){break}
    }
    const test = changeValidation();
    if(test===0){
      this.setState((prev) => {
        return {
          ...prev,
          newForm: true,
        };
      });
    };
  }

  render() {
    if (!this.state.newForm) {
      return (
        <Form
        state={this.state}
        validationAfterBlur={this.validationAfterBlur}
        handleReset={this.handleReset}
        onSubmit={this.onSubmit}
        handleChange={this.handleChange}
        />
      );
    } else {
        return (
          <ProfileForm
            name={this.state.name}
            surname={this.state.surname}
            date={this.state.date}
            phone={this.state.phone}
            link={this.state.link}
            about={this.state.about}
            technologies={this.state.technologies}
            description={this.state.description}
          />
        );
    } 
}
}

export default App;