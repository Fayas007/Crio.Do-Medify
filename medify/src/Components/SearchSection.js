import React from "react";
import Button from "./Button";
import SearchSectionPic from "../assets/SearchSectionPic.png";
import styles from "./SearchSection.module.css"



const SearchSection= ()=>{
    return <section className={styles.container}>

        <div className={styles.inner_container}>
        <input className={styles.input} placeholder="    State"/>
        <input className={styles.input} placeholder="    City"/>
        <Button>Search</Button>
        </div>

        <img src={SearchSectionPic} alt="pic" className={styles.image}/>
    </section>
}

export default SearchSection;