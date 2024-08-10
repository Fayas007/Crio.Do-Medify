import React from "react";
import styles from "./Card.module.css"

const Card=({image,date,sentence,pic,name})=>{
    return <div className={styles.container}>
        <img src={image} />
        <p className={styles.date}>{date}</p>
        <p className={styles.sentence}>{sentence}</p>
        <div className={styles.inner_container}>
        <img src={pic}/>
        <p className={styles.name}>{name}</p>
        </div>
    </div>
}

export default Card;