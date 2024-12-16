import React from "react";
import styles from "../styles/CaseStudy.module.css";
import iconStudy from '../public/iconStudy.png'
import Image from "next/image";
const cases = [
    { icon: iconStudy, label: "Ad Verification" },
    { icon: iconStudy, label: "Fast Shopping" },
    { icon: iconStudy, label: "Pricing Monitoring" },
    { icon: iconStudy, label: "Network" },
    { icon: iconStudy, label: "Talent Sourcing" },
    { icon: iconStudy, label: "Data Collection" },
    { icon: iconStudy, label: "Verification" },
    { icon: iconStudy, label: "Market Research" },
];

const CaseStudy = () => {
    return (

        <div className={styles.caseStudySection}>
            <div className={styles.header}>
                <h3>Top Case</h3>
                <h2>Case Study</h2>
                <p>
                    Peer-to-Peer (P2P) proxy service designed to enhance your browsing
                    experience by providing flexible, high-speed, and reliable proxy
                    solutions.
                </p>
            </div>
            <div className={styles.caseGrid}>
                {cases.map((item, index) => (
                    <div key={index} className={styles.caseItem}>
                        <div className={styles.iconWrapper}>
                            <Image height={40} width={40} src={item.icon} alt={item.label} className={styles.icon} />
                        </div>
                        <p className={styles.label}>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudy;
