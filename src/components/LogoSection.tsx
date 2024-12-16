import React from "react";
import styles from "../styles/LogoSection.module.css";
import Image from "next/image";
import logoSection from '../public/logoSection.png';
const logos = [
    { id: 1, src: logoSection, alt: " Logo" },
    { id: 2, src: logoSection, alt: " Logo" },
    { id: 3, src: logoSection, alt: " Logo" },
    { id: 4, src: logoSection, alt: " Logo" },
    { id: 5, src: logoSection, alt: " Logo" },
    { id: 6, src: logoSection, alt: " Logo" },
    { id: 7, src: logoSection, alt: " Logo" },
    { id: 8, src: logoSection, alt: " Logo" },
];

const LogoSection = () => {
    return (
        <div className={styles.logoSection}>
            <p className={styles.description}>
                Trusted by many businesses to enhance learning and drive educational growth.
            </p>
            <div className={styles.logoContainer}>
                {logos.map((logo) => (
                    <Image
                        width={109}
                        height={48}
                        key={logo.id} src={logo.src} alt={logo.alt} className={styles.logo} />
                    // <img key={logo.id} src={logo.src} alt={logo.alt} className={styles.logo} />
                ))}
            </div>
        </div>
    );
};

export default LogoSection;
