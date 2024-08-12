import React from "react";
import Card from "./Card";
import BlogPic from "../assets/Blogs/blogpic.png";
import DoctorPic from "../assets/Blogs/doctorpic.png"
import styles from "./Blogs.module.css"

const Blogs= ()=>{

    let blogs=[{image:BlogPic,date:"Medical  March 31, 2022",sentence:"6 Tips To Protect Your Mental Health When You're Sick",pic:DoctorPic,name:"Rebecca Lee"},
        {image:BlogPic,date:"Medical  March 31, 2022",sentence:"6 Tips To Protect Your Mental Health When You're Sick",pic:DoctorPic,name:"Rebecca Lee"},
        {image:BlogPic,date:"Medical  March 31, 2022",sentence:"6 Tips To Protect Your Mental Health When You're Sick",pic:DoctorPic,name:"Rebecca Lee"}
    ]


    return <section className={styles.section}>
        <div className={styles.innerflex}>
        <p  className={styles.heading1}>Blog & News</p>
        <p  className={styles.heading2}>Read Our Latest News</p>
        <div className={styles.container}>
        {blogs.map((ele,i) => <Card image={ele.image} date={ele.date} sentence={ele.sentence} pic={ele.pic} name={ele.name} key={i}/>)}
        </div>
        </div>
    </section>
}

export default Blogs;

//image,date,sentence,pic,name
