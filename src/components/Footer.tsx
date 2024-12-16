import React from "react";
import styles from "../styles/Footer.module.css";
import footerData from "../data/footerData.json";
import Image from "next/image";
import logo from '../public/logo.png';
import paymentIcon from "../public/paymentIcon.png"
const Footer = ({ }) => {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>{footerData.resellerProgram.title}</h1>
                <p>{footerData.resellerProgram.description}</p>
                <button>{footerData.resellerProgram.buttonText}</button>

                <div className={styles.links}>
                    {footerData.resellerProgram.links.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className={styles.footer}>

                <section>
                    <Image
                        src={logo}
                        // width={500}
                        // height={500}
                        alt='logo'
                    />
                    <p>{footerData.footer.about}</p>
                    <div className={styles.telegramSection}>
                        <a href={'/'} className={styles.telegramButton} rel="noopener noreferrer">
                            <img src="/images/telegram-icon.png" alt="Telegram" />
                            {footerData.footer.telegram.buttonText}

                        </a>

                    </div>

                </section>
                <div className={styles.sectionList}>
                    <section>
                        <h3>Account</h3>
                        {footerData.footer.links.account.map((link, i) => (
                            <p key={i}>{link}</p>
                        ))}
                    </section>
                    <section>
                        <h3>Affiliate</h3>
                        {footerData.footer.links.affiliate.map((link, i) => (
                            <p key={i}>{link}</p>
                        ))}
                    </section>
                    <section>
                        <h3>Category</h3>
                        {footerData.footer.links.category.map((link, i) => (
                            <p key={i}>{link}</p>
                        ))}
                    </section>
                    <section>
                        <h3>Service, Term</h3>
                        {footerData.footer.links.terms.map((link, i) => (
                            <p key={i}>{link}</p>
                        ))}
                    </section>
                </div>

            </div>
            <div className={styles.listPayment}>
                <div className={styles.disclaimer}>{footerData.footer.disclaimer}</div>

                {/* Payment Methods */}
                <div className={styles.paymentMethods}>
                    {footerData.footer.paymentMethods.map((method, index) => (
                        <Image key={index} src={paymentIcon} alt={method.name} title={method.name} />
                    ))}
                </div>
            </div>



            {/* Disclaimer */}

        </div>

    );
};

export default Footer;
