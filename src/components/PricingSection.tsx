import React from "react";
import styles from "../styles/PricingSection.module.css";
import pricingData from "../data/pricing.json";
import Image from "next/image";
import listLogo from "../public/listLogo.png"

const PricingSection = () => {
    return (
        <div className={styles.pricingSection}>
            <div className={styles.header}>
                <p className={styles.flashSale}>FLASH SALE DISCOUNT 20%</p>
                <h2 className={styles.title}>Daily price proxy</h2>
                <p className={styles.subtitle}>
                    Pay only for the days you need, with no long-term commitments. Seamless browsing with IPs sourced globally through a decentralized network.
                </p>
            </div>
            <div className={styles.pricingCards}>
                {pricingData.map((item) => (
                    <div
                        key={item.id}
                        className={`${styles.card} ${item.mostPopular ? styles.mostPopular : ""}`}
                    >
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardHighlight}>{item.highlight}</p>
                        </div>
                        <ul className={styles.features}>
                            {item.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <div className={styles.price}>
                            <p>{item.price}</p>
                        </div>
                        {item.mostPopular && <div className={styles.popularBadge}>most popular</div>}
                    </div>
                ))}
            </div>
            <div className={styles.certifications}>
                <p>Certified data centers and net providers</p>
                <div >
                    <Image
                        width={375}
                        height={55}

                        src={listLogo} alt="ISO 9001" />

                </div>
            </div>
        </div>
    );
};

export default PricingSection;
