import React from "react";
import styles from "./Button.module.css"

const Button =({children}) =>{
    return <button variant="contained" className={styles.button}>{children}</button>
}

export default Button;