import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";

export const About = () => {
  return <section className={styles.container} id="about"> 
    <h2 className={styles.title}> About </h2>
    <div className={styles.content}>
        <img 
         src={getImageUrl("about/aboutImage.png")}
         alt="Me sitting on a desk"
         className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
                <div className={styles.aboutItemText}>
                    <h3>Business Analyst</h3>
                    <p>I'm pursuing MSc. Business Analytics at University of Birmingham
                    and will be graduated in Semptember 2024
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server" />
                <div className={styles.aboutItemText}>
                    <h3>Software Engineer - Backend Developer</h3>
                    <p>
                        I have experience developing fast and optimised backend systems 
                        and APIs
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                        I have experience developing optimised forntend websites
                    </p>
                </div>
            </li>
        </ul>
    </div>
  </section>
}
