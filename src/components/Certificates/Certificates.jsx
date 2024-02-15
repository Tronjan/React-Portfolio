import React from 'react'
import certificates from "../../data/certificates.json";
import { CertificateCard } from './CertificateCard';
import styles from "./Certificate.module.css"


export const Certificates = () => {
  return (
  <section className={styles.container} id='certificates'>
    <h2 className={styles.title}>Certificates</h2>
    <div className={styles.certificate}>
      { certificates.map((certificate, id) => {
         return <CertificateCard key={id} certificate={certificate}/>;
        })}
    </div>
  </section>
  );
};
