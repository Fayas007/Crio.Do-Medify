import React from "react";
import Carousel from "./Carousel";
import doctor1 from "../assets/Specialist/doctor1.png"
import doctor2 from "../assets/Specialist/doctor2.png"
import doctor3 from "../assets/Specialist/doctor3.png"
import doctor4 from "../assets/Specialist/doctor4.png"
import doctor5 from "../assets/Specialist/doctor5.png"
import styles from "./Specialist.module.css"

const Specialist= ()=>{

    let images=[doctor1,doctor2,doctor3,doctor4,doctor5]

    return <div className={styles.container}>
        <p className={styles.writing}>Our Medical Specialist</p>
        <Carousel images={images}/>
    </div>
}

export default Specialist;