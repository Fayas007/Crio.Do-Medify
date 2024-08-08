import React from "react";
import tagHero from "../assets/tag_hero.png"
import heroImage from "../assets/hero_image.png"
import styles from "./Hero.module.css"
import Button from "./Button";

const Hero=()=>{
    return <section className={styles.container}>
        <div className={styles.hero_left}>
        <img src={tagHero} className={styles.tag_hero}/>
        <Button children={"Find Centres"}/>
        </div>
        
        <img src={heroImage} className={styles.hero_image}/>
    </section>
}

export default Hero;