import React from "react";
import "./Input.css";
import chooseValidation from "utils/switchers/validationSwitch";
class Input extends React.Component {

  render() {
    const {name, innerText, handleChange, validationAfterBlur, placeholder, type} = this.props;
    // eslint-disable-next-line no-useless-concat
    const error =  'error' + ' ' + 'error-'+name;

    return (
      <div className='inputBox' >
        <label className="label" htmlFor={name}>{innerText}<div className={error} ></div></label>
        <input
        className='input'
          onBlur={(e) => {
            validationAfterBlur(e)}}
          onChange={(e) => {
            const eValue = chooseValidation(name, e.target.value);
            handleChange(eValue, name);
          }}
          placeholder={placeholder}
          id={name}
          type={type}
          name={name}
          value={this.props.state[name]}
        ></input>
        
      </div>
    );
  }
}

export default Input;