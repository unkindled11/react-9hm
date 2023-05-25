import React from "react";
import "./TextArea.css";
import chooseValidation from "utils/switchers/validationSwitch";

class TextArea extends React.Component {

  render() {
    const {textareaLength} = this.props.state
    const {name, innerText, handleChange, placeholder, validationAfterBlur} = this.props;
    // eslint-disable-next-line no-useless-concat
    const error =  'error' + ' ' + 'error-'+name;

    return (
      <div className='textBox'>
        
        <label className="label" htmlFor={name}>
          {innerText}
          <div className={error}></div>
        </label>
        <textarea
          onChange={(e) => {
            const eValue = chooseValidation(name, e.target.value);
            handleChange(eValue, name);
          }}
          onBlur={(e)=>{validationAfterBlur(e)}}
          className='textArea'
          placeholder={placeholder}
          id={name}
          name = {name}
          value={this.props.state[name]}
          rows="7"
        ></textarea>
        <span className="symbol">
          <span>{textareaLength[name]}</span>/
          <span>600</span>
        </span>
        
      </div>
    );
  }
}

export default TextArea;