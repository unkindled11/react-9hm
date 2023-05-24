import React from "react";
import styles from "./ProfileForm.module.css";

export default class FormProfile extends React.Component {

  render() {
    const {name, surname, date, phone, link, about, technologies, description} = this.props;
    return (
        <div className={styles.box}>
      <form className={styles.form}>
        <h1 className={styles.h}>
         Your Profile
        </h1>
        <div className={styles.profileBox}>
          <div className={styles.profileRow}>
            Name: <span className={styles.profileData}>{name}</span>
          </div>
          <div className={styles.profileRow}>
            Surname:
            <span className={styles.profileData}>{surname}</span>
          </div>
          <div className={styles.profileRow}>
            Birth Date:
            <span className={styles.profileData}>{date}</span>
          </div>
          <div className={styles.profileRow}>
            Phone Number:
            <span className={styles.profileData}>{phone}</span>
          </div>
          <div className={styles.profileRow}>
            Website:
            <span className={styles.profileData}>{link}</span>
          </div>
          <div className={styles.profileRow}>
            About Yourself:
            <span className={styles.profileData}>{about}</span>
          </div>
          <div className={styles.profileRow}>
            Technologies:
            <span className={styles.profileData}>{technologies}</span>
          </div>
          <div className={styles.profileRow}>
            Description of last project:
            <span className={styles.profileData}>{description}</span>
          </div>
        </div>
      </form>
      </div>
    );
  }
}