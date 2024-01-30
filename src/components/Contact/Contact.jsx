import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

export const Contact = () => {
  return <footer id='contacts' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="emailIcon" />
            <a href="mailto:niranjandubule10@gmail.com">niranjandubule10@gmail.com</a>
        </li> 
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedinIcon" />
            <a href="https://www.linkedin.com/in/niranjan-dubule/">linkedin/niranjan-dubule</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="githubIcon" />
            <a href="https://github.com/Tronjan">github/niranjan</a>
        </li>
    </ul>
  </footer>
}
