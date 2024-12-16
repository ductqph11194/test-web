// components/TopLocations.tsx  
import Image from 'next/image';
import styles from '../styles/TopLocation.module.css';
import flag from '../public/flag.png'
const TopLocation = () => {
    const locations = [
        { name: 'Russia', ips: '28,394', flag: flag },
        { name: 'United Kingdom', ips: '88,924', flag: flag },
        { name: 'South Korea', ips: '92,404', flag: flag },
        { name: 'Japan', ips: '129,809', flag: flag },
        { name: 'France', ips: '47,802', flag: flag },
        { name: 'Germany', ips: '341,785', flag: flag },
        { name: 'Brazil', ips: '182,739', flag: flag },
        { name: 'India', ips: '93,022', flag: flag },
        { name: 'United States', ips: '912,380', flag: flag },
        { name: 'Australia', ips: '203,983', flag: flag },
        { name: 'Canada', ips: '72,304', flag: flag },
        { name: 'Vietnam', ips: '41,785', flag: flag },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.infoSection}>
                <h3 className={styles.subtitle}>Top Locations</h3>
                <h2 className={styles.title}>Countries with the best proxy usage</h2>
                <p className={styles.description}>
                    Choose the best proxies in every city or country you ever heard of.
                </p>
                <button className={styles.button}>See All Locations →</button>
            </div>

            <div className={styles.locationsSection}>
                {locations.map((location, index) => (
                    <div key={index} className={styles.locationItem}>
                        <Image
                            src={location.flag}
                            alt={location.name}
                            width={24}
                            height={24}
                            className={styles.flag}
                        />
                        <div>
                            <p className={styles.country}>{location.name}</p>
                            <p className={styles.ips}>{location.ips}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopLocation;