import React from "react";
import styles from "../styles/Header.module.css";
import headerData from "../data/headerData.json";
import logo from '../public/logo.png';
import fbIcon from '../public/fbIcon.png'
import Image from "next/image";
export default function Header() {
  const { promotion, facebook, navLinks, sale, language, cta } = headerData;

  return (
    <header className={styles.header}>
      {/* Promotion Banner */}
      <div className={styles.promotion}>
        <span> {promotion}</span>
        <a href="https://facebook.com" className={styles.facebookLink}>
          {facebook} <span className={styles.icon}><Image src={fbIcon} alt="Facebook" /></span>
        </a>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src={logo}
            // width={500}
            // height={500}
            alt='logo'
          />
        </div>



        <div className={styles.actions}>
          <div className={styles.btnGroup}><span className={styles.saleBadge}>{sale}</span>
            <div className={styles.language}>
              <button>{language} ⌄</button>
            </div>
            <button className={styles.ctaButton}>{cta} →</button></div>
          <ul className={styles.navLinks}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
