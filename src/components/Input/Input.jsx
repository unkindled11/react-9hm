import "./Input.css";
import chooseValidation from "utils/switchers/validationSwitch";

const  Input =(props)=> {
    const {name, InnerText, validationAfterBlur, placeholder, type, value,error} =props;
    // eslint-disable-next-line no-useless-concat
    const classError =  'error' + ' ' + 'error-'+name;

    return (
      <div className='inputBox' >
        <label className="label" htmlFor={name}>{InnerText}<div className={classError} >{error}</div></label>
        <input
        className='input'
          onBlur={(e) => {
            validationAfterBlur(e)}}
          onChange={(e) => {
            const eValue = chooseValidation(name, e.target.value)[0];
            props.handleChange(eValue, name);
          }}
          placeholder={placeholder}
          type={type|| 'text'}
          value={value}
          id={name}
        ></input>
        
      </div>
    );
}

export default Input;