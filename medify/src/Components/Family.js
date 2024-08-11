import React from "react";
import FamilyPic from "../assets/Family.png"
import styles from "./Family.module.css"

const Family = ()=>{


    return <div className={styles.outerDiv}>
        <div className={styles.innerDiv}>
            <p className={styles.firstp}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
            <p className={styles.secondp}>Our Families</p>
            <p className={styles.thirdp}>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
        </div>
        <img src={FamilyPic} alt="family"/>
    </div>
}

export default Family;