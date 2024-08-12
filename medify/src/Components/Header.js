import React from "react";
import styles from "./Header.module.css"
import logo from "../assets/medifylogo.png"
import Button from "./Button";
import BasicTabs from "./TabComponent";


const Header=()=>{
    return <div>
        <div className={styles.header_text}> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</div>
        <nav>
            <img src={logo} alt="logo" className={styles.logo}/>
            {/* <ul className={styles.links}>
                <li>Find Doctors</li>
                <li>Hospitals</li>
                <li>Medicines</li>
                <li>Surgeries</li>
                <li>Software for Provider</li>
                <li>Facilities</li>
                <Button>My Bookings</Button>
            </ul> */}
            <BasicTabs/>
            {/* <Button>My Bookings</Button> */}
            
        </nav>
    </div>
}


export default Header;


