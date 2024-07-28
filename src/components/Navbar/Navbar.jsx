import React from 'react'
import styles from "./Navbar.module.css";
import { useState } from 'react';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [fix, setfix] = useState(false);

    function setFixed() {
        if(window.scrollY >= 400){
            setfix(true)
        }else{
            setfix(false)
        }
    }
    window.addEventListener(scroll, setFixed)

  return (
   <nav className={styles.navbar}> 
    <a className={styles.title} href="/">Portfolio</a>
    <div className={styles.menu}>
        <img className={styles.menuBtn} src={ 
            menuOpen 
            ? getImageUrl("nav/closeIcon.png") 
            : getImageUrl("nav/menuIcon.png")
            }
            alt="mednuButton" 
            onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
        >
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/#about">About</a>
            </li>
            <li>
                <a href="/#experience">Experience</a>
            </li>
            <li>
                <a href="/projects">Projects</a>
            </li>
            <li>
                <a href="/certificates">Certificates</a>
            </li>
            <li>
                <a href="#contacts">Contact</a>
            </li>
        </ul>
    </div>
   </nav>
  )
}
