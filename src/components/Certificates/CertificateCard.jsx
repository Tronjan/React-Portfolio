import React from 'react'
import {getImageUrl} from "../../utils";
import styles from "./CertificateCard.module.css";

export const CertificateCard = ({certificate: {title, imageSrc, source}}) => {
  return (
    <div className={styles.container}>
           <img 
            src={getImageUrl(imageSrc)} 
            alt={`Image of ${title}`} 
            className={styles.image}
           />
           <h3 className={styles.title}>{title}</h3>
            <div className={styles.links}>
              <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">View</a>
            </div>
    </div>
  )
}
