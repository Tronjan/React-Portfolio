import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
export const Hero = () => {
  return <setion className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Niranjan Dubule</h1>
            <p className={styles.description}>Loren ipsum dire sit</p>
            <a href="mailto:niranjandubule10@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
     </setion>
}
