import React from "react";
import Care1 from "../assets/Care/Care1.png"
import Care2 from "../assets/Care/Care2.png"
import styles from "./CareSection.module.css"

const CareSection= () =>{
    return <section className={styles.container}>
        <img src={Care1} alt="care"/>
        <img src={Care2} alt="care"/>
    </section>
}

export default CareSection;