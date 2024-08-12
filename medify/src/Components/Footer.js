import React from "react";
import styles from "./Footer.module.css"
import logo from "../assets/medifylogo.png"
import icon1 from "../assets/Footer/Footer1.png"
import icon2 from "../assets/Footer/Footer2.png"
import icon3 from "../assets/Footer/Footer3.png"
import icon4 from "../assets/Footer/Footer4.png"
import arrow from "../assets/Footer/arrow.png"


const Footer = ()=>{
    return <section className={styles.outersection}>
        <div className={styles.outer_container}>

        <div className={styles.container1}>
            <img src={logo} alt="logo"/>
            <div className={styles.inner_container}>
                <img src={icon1} alt="facebook"/>
                <img src={icon2} alt="twitter"/>
                <img src={icon3} alt="youtube"/>
                <img src={icon4} alt="pinterest"/>
            </div>
        </div>

        <div className={styles.container2}>
            <span><img src={arrow} alt="arrow"/><span>    About Us</span></span>
            <span><img src={arrow} alt="arrow"/><span>    Our Pricing</span></span>
            <span><img src={arrow} alt="arrow"/><span>    Our Gallery</span></span>
            <span><img src={arrow} alt="arrow"/><span>    Appointment</span></span>
            <span><img src={arrow} alt="arrow"/><span>    Privacy Policy</span></span>
        </div>

        <div className={styles.container2}>
        <span><img src={arrow} alt="arrow"/><span>    Orthology</span></span>
            <span><img src={arrow} alt="arrow"/><span>    Neurology</span></span>
            <span><img src={arrow} alt="arrow"/><span>    Dental Care</span></span>
            <span><img src={arrow} alt="arrow"/><span>    Opthalmology</span></span>
            <span><img src={arrow} alt="arrow"/><span>    Cardiology</span></span>
        </div>

        <div className={styles.container2}>
        <span><img src={arrow} alt="arrow"/><span>    About Us</span></span>
            <span><img src={arrow} alt="arrow"/><span>    Our Pricing</span></span>
            <span><img src={arrow} alt="arrow"/><span>    Our Gallery</span></span>
            <span><img src={arrow} alt="arrow"/><span>    Appointment</span></span>
            <span><img src={arrow} alt="arrow"/><span>    Privacy Policy</span></span>
        </div>
        
        
        </div>

        <div className={styles.footer}>
        <hr></hr>
        <p className={styles.footerText}>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
        </div>

    </section>
}

export default Footer;