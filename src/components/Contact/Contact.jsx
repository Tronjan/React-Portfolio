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
            <a href="mailto:niranjandubule10@gmail.com">linkedin/niranjan-dubule</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="githubIcon" />
            <a href="mailto:niranjandubule10@gmail.com">github/niranjan</a>
        </li>
    </ul>
  </footer>
}
