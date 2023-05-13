import React, {Component} from "react";

import styles from './form.module.css';

class Form extends Component{
   handleSubmit=evt=>{
    evt.preventDefault();
   }
    render(){
        return(
            <div className={styles.box}>
                <h1 className={styles.h}>Create your application form</h1>
        <form className={styles.form} onSubmit={this.handleSubmit}>
            <label  className={styles.label} htmlFor="Name">
                Name:
            <input className={styles.input} type="text" name="Name" placeholder="Enter your name" />
            </label>
            <label className={styles.label}  htmlFor="">Surname:<input className={styles.input} type="text" name="Surname" placeholder="Enter your surname" /></label>
            <label className={styles.label} htmlFor="">Date of birth: <input className={styles.input} type="date"  name="Date of birth"/></label>
            <label className={styles.label} htmlFor="">Number: <input className={styles.input} type="number" name="Number"  placeholder="Enter you phone number" /></label>
            <label className={styles.label} htmlFor="">Website: <input className={styles.input} type="url" name="Website"  placeholder="Enter url of your website" /></label>
            <label className={styles.label} htmlFor="">About yourself: <textarea   rows={7} className={styles.input} type="text" name="About yourself"  placeholder=" Please tell us about yourself" /></label>
            <label className={styles.label} htmlFor="">Technologies: <textarea rows={7} className={styles.input} type="text" name="Technologies"  placeholder="Please write down your technologies" /></label>
            
            <label className={styles.label} htmlFor="">Description of your last project: <textarea rows={7} className={styles.input} type="text" name="Description of your last project"  placeholder="Purpose, technologies, etc." /></label>
            <div className={styles.buttonBox}>
            <button className={styles.button} type="submit">Save</button>
            <button className={styles.button} type="button">Cancel</button>
            </div>
        </form>
        </div>
        )
    }
}
export default Form;