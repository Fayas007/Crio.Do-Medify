import React from "react";
import Carousel from "../Components/Carousel";
import offer1 from "../assets/offers/offer1.png"
import offer2 from "../assets/offers/offer2.png"
import styles from "./OffersSection.module.css"



const OffersSection = () =>{


let images=[offer1,offer2,offer1,offer2,offer1,offer2,offer1]


    return <div className={styles.container}><Carousel images={images}/></div> 
}

export default OffersSection;