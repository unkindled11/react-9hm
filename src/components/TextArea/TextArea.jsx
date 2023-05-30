import "./TextArea.css";

import chooseValidation from "utils/switchers/validationSwitch";

const TextArea = (props)=> {
  const {name, error, innerText,placeholder, value,validationAfterBlur,length} =props;
  // eslint-disable-next-line no-useless-concat
  const errorClass =  'error' + ' ' + 'error-'+name;

  return( 
      <div className='textBox'>
        
        <label className="label" htmlFor={name}>
          {innerText}
          <div className={errorClass}>{error}</div>
        </label>
        <textarea
          onChange={(e) => {
            const eValue = chooseValidation(name, e.target.value)[0];
            props.handleChange(eValue, name);
          }}
          onBlur={(e)=>{validationAfterBlur(e)}}
          className='textArea'
          placeholder={placeholder}
          id={name}
          name = {name}
          value={value}
          rows="7"
        ></textarea>
        <span className="symbol">
          <span>{length}</span>/
          <span>600</span>
        </span>
        
      </div>
  );
  
}

export default TextArea;