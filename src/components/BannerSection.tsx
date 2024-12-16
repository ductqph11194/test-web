import React from "react";
import styles from "../styles/bannerSection.module.css";
import heroData from "../data/bannerData.json";

export default function BannerSection() {
    const { title, subtitle, description, buttons, features } = heroData;

    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <h1>
                    <span>{title.split(" ")[0]} </span>
                    {title.split(" ").slice(1).join(" ")}
                </h1>
                <h2>{subtitle}</h2>
                <p>{description}</p>
                <div className={styles.buttons}>
                    {buttons.map((button, index) => (
                        <a key={index} href={button.link} className={styles.button}>
                            {button.text}
                        </a>
                    ))}
                </div>
            </div>

            <div className={styles.heroFeatures}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.feature}>
                        <div className={styles.textFeatures}><h3>{feature.title}</h3>
                            <p>{feature.description}</p></div>

                    </div>
                ))}
            </div>
        </section>
    );
}
