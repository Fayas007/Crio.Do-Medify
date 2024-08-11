import React from "react";
import download from "../assets/download.png"
import styles from "./DownloadSection.module.css"

const DownloadSection= () =>{
    return <div className={styles.container}>
        <img src={download} alt="download" />
    </div>
}

export default DownloadSection;