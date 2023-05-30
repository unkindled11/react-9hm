import { useState } from "react";

import Input from "../Input/Input";
import TextArea from "components/TextArea";
import ProfileForm from "../ProfileForm";
import chooseValidation from "utils/switchers/validationSwitch";

import styles from './form.module.css';

const textAreaData = [
  {
    placeholder: "Tell about yourself",
    name: "about",
    innerText: "About Yourself:",
  },
  {
    placeholder: "Tell about your technical skills",
    name: "technologies",
    innerText: "Technology Stack:",
  },
  {
    placeholder: "Describe your latest project",
    name: "description",
    innerText: "Last Project:",
  },
];

const inputData = [
  {
    placeholder: "Enter Your Name",
    InnerText: "Name:",
    name: "name",
    type: "text",
  },

  {
    placeholder: "Enter Your Surname",
    InnerText: "Surname:",
    name: "surname",
    type: "text",
  },
  {
    placeholder: "",
    InnerText: "Birth Date:",
    name: "date",
    type: "date",
  },
  {
    placeholder: "Enter Your Phone Number",
    InnerText: "Phone Number:",
    name: "phone",
    type: "tel",
  },
  {
    placeholder: "Enter URL of Your Website",
    InnerText: "Website:",
    name: "link",
    type: "text",
  },
];

const initialState = {
  name: "",
  surname: "",
  date: "",
  phone: "",
  link: "",
  about: "",
  technologies: "",
  description: "",
};

const initialStateLength = {
  about: 0,
  technologies: 0,
  description: 0,
};

const initialStateError = {
  name: " ",
  surname: " ",
  date: " ",
  phone: " ",
  link: " ",
  about: " ",
  technologies: " ",
  description: " ",
};

const  Form =(props)=> {
 
  const [values, setValues] = useState(initialState);
  const [length, setLength] = useState(initialStateLength);
  const [error, setError] = useState(initialStateError);
  const [newform, setNewform] = useState(false);

  const handleChange = (value, field) => {
    setValues({ ...values, [field]: value });

    setLength({ ...length, [field]: value.length });

    setError({ ...error, [field]: chooseValidation(field, value)[1] });
  };

  const validationAfterBlur = (e) => {
    const newErr = chooseValidation(e.target.id, e.target.value)[1];
    setError({ ...error, [e.target.id]: newErr });
  };

  const onClick = (e) => {
    e.preventDefault();
    const errs = Object.values(error);
    const newErrors = { ...error };
    if (errs.filter((el) => el === " ")) {
      for (let err in newErrors) {
        if (newErrors[err] === " ") {
          newErrors[err] = "this field is empty";
        }
      }
      setError(newErrors);
    }
    if (Object.values(newErrors).every((el) => el === "")) {
      setNewform(true);
    }
  };

  const handleReset = () => {
    setValues(initialState);
    setLength(initialStateLength);
    setError(initialStateError);
  };

  if (newform) {
    return <ProfileForm {...values} />;
  }

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
        {inputData.map(({placeholder,InnerText,name,type})=>( 
        <Input
          validationAfterBlur={validationAfterBlur}
          handleChange={handleChange}
          value={values[name]}
          key={name}
          InnerText={InnerText}
          type={type}
          name={name}
          placeholder={placeholder}
          error={error[name]}
        />))}
        {textAreaData.map(({placeholder,name,innerText})=>(
          <TextArea
          handleChange={handleChange}
          validationAfterBlur={validationAfterBlur}
          innerText={innerText}
          value={values[name]}
          length={length[name]}
          name={name}
          key={name}
          placeholder={placeholder}
          error={error[name]}
        />
        ))}
      </div>
      <div className={styles.buttonBox}>
        <button className={styles.button} type="submit" onClick={(e)=> onClick(e)}>
          Submit
        </button>
        <button
          className={styles.button}
          type="reset"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
    </div>
    );
}
export default Form;