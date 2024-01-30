import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
export const Hero = () => {
  return <setion className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Niranjan Dubule</h1>
            <p className={styles.description}>A Software Developer with a comprehensive background in the field. Currently pursuing MSc in Business Analytics at the University of Birmingham</p>
            <a href="https://www.linkedin.com/in/niranjan-dubule/" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/niranjan.png")} alt="Hero Image" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
     </setion>
}