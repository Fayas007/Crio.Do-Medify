import React from "react";
import styles from "./FAQSection.module.css"
import FAQ1 from "../assets/FAQ/FAQ1.png"
import FAQ2 from "../assets/FAQ/FAQ2.png"
import sticky1 from "../assets/FAQ/sticky1.png"
import sticky2 from "../assets/FAQ/sticky2.png"

const FAQSection=()=>{
    return <section className={styles.outerContainer}>
        <p className={styles.heading1}>Get Your Answer</p>
        <p className={styles.heading2}>Frequently Asked Questions</p>
        <div className={styles.firstContainer}>
            <div className={styles.images}>
            <img src={FAQ1} alt="FAQ"/>
            <img src={sticky1} alt="sticky1"  className={styles.image1}/>
            <img src={sticky2} alt="sticky2" className={styles.image2}/>
            </div>
            <div className={styles.secondContainer}>
            <p className={styles.question}>Why choose our medical for your family?<img src={FAQ2} alt="plus"/></p>
            <p className={styles.question}>Why we are different from others?<img src={FAQ2} alt="plus"/></p>
            <p className={styles.question}>Trusted & experience senior care & love<img src={FAQ2} alt="plus"/></p>
            <p className={styles.question}>How to get appointment for emergency cases?<img src={FAQ2} alt="plus"/></p>
            </div>
        </div>
        
    </section>
}

export default FAQSection;
