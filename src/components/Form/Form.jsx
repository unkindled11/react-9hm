import React from "react";
import Input from "../Input/Input";
import TextArea from "components/TextArea";
import styles from './form.module.css';

 class Form extends React.Component {

  render() {

    return (
       <div className={styles.box}>
      <form
      className={styles.form}
      onSubmit={(e) => {
        this.props.onSubmit(e);
      }}
    >
      <h1 className={styles.h}>Create your application form</h1>
      <div>
        <Input
          state={this.props.state}
          validationAfterBlur={this.props.validationAfterBlur}
          handleChange={this.props.handleChange}
          innerText={"Name:"}
          type={"text"}
          name={"name"}
          placeholder={"Enter Your Name"}
        />
        <Input
          state={this.props.state}
          validationAfterBlur={this.props.validationAfterBlur}
          handleChange={this.props.handleChange}
          innerText={"Surname:"}
          type={"text"}
          name={"surname"}
          placeholder={"Enter Your Surname"}
        />
        <Input
          state={this.props.state}
          validationAfterBlur={this.props.validationAfterBlur}
          handleChange={this.props.handleChange}
          innerText={"Date of birth:"}
          type={"date"}
          name={"date"}
        />
        <Input
          state={this.props.state}
          validationAfterBlur={this.props.validationAfterBlur}
          handleChange={this.props.handleChange}
          innerText={"Phone Number:"}
          type={"tel"}
          name={"phone"}
          placeholder={"Enter Your Phone Number"}
        />
        <Input
          state={this.props.state}
          validationAfterBlur={this.props.validationAfterBlur}
          handleChange={this.props.handleChange}
          innerText={"Website:"}
          type={"text"}
          name={"link"}
          placeholder={"Enter URL of Your Website"}
        />
        <TextArea
          state={this.props.state}
          handleChange={this.props.handleChange}
          validationAfterBlur={this.props.validationAfterBlur}
          innerText={"About Yourself:"}
          name={"about"}
          placeholder={"Tell about yourself"}
        />
        <TextArea
          state={this.props.state}
          handleChange={this.props.handleChange}
          validationAfterBlur={this.props.validationAfterBlur}
          innerText={"Technologies:"}
          name={"technologies"}
          placeholder={"Tell About Your Technical Skills"}
        />
        <TextArea
          state={this.props.state}
          handleChange={this.props.handleChange}
          validationAfterBlur={this.props.validationAfterBlur}
          innerText={"Description of last Project:"}
          name={"description"}
          placeholder={"Describe Your Lastest Project"}
        />
      </div>
      <div className={styles.buttonBox}>
        <button className={styles.button} type="submit">
          Submit
        </button>
        <button
          className={styles.button}
          type="reset"
          onClick={(e) => {
            this.props.handleReset(e);
          }}
        >
          Reset
        </button>
      </div>
    </form>
    </div>
    );
  }
}
export default Form;