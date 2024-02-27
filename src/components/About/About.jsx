import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";
import graph from "../../../assets/AnimatedSkills/graph.json";
import coder from "../../../assets/AnimatedSkills/coder.json";
import Lottie from 'lottie-react';

export const About = () => {
  return <section className={styles.container} id="about"> 
    <h2 className={styles.title}> About </h2>
    <div className={styles.content}>
        <img 
         src={getImageUrl("about/about.svg")}
         alt="Me sitting on a desk"
         className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <Lottie loop={true} animationData={graph} className={styles.lottieImage}/>
                <div className={styles.aboutItemText}>
                    <h3>Business Analyst</h3>
                    <p>I'm pursuing MSc. Business Analytics at University of Birmingham
                    and will be graduated in September 2024
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <Lottie loop={true} animationData={coder} className={styles.lottieImage}/>
                <div className={styles.aboutItemText}>
                    <h3>Software Engineer</h3>
                    <p>
                        Developed fast and optimised backend systems and APIs.<br/> Contributed to healthcare system features, 
                        showcasing expertise in C# .NET Core, REST, and third part Integration.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <Lottie loop={true} animationData={coder} className={styles.lottieImage}/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                        I have experience developing optimised frontend websites. Learning ReactJs
                        while creating various projects
                    </p>
                </div>
            </li>
        </ul>
    </div>
  </section>
}
