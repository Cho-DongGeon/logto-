import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.page}>
            <div style={{fontSize: '48px'}}>---HOME--</div>
        </div>
    );
}
