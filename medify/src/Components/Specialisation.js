import React from "react";
import styles from "./Specialisation.module.css"
import image1 from "../assets/Specialisation/spec1.png"
import image2 from "../assets/Specialisation/spec2.png"
import image3 from "../assets/Specialisation/spec3.png"
import image4 from "../assets/Specialisation/spec4.png"
import image5 from "../assets/Specialisation/spec5.png"
import image6 from "../assets/Specialisation/spec6.png"
import image7 from "../assets/Specialisation/spec7.png"
import image8 from "../assets/Specialisation/spec8.png"
import Button from "./Button";


const Specialisation = () =>{

    let images=[image1,image2,image3,image4,image5,image6,image7,image8]

    return <div className={styles.container}>
        <p className={styles.writing}>Find by specialisation</p>
        <div className={styles.grid_container}>
            {images.map((image,i) => <img src={image} alt="specialisation" key={i}/>)}
        </div>
        <Button children={"View All"}/>
    </div>
}

export default Specialisation;