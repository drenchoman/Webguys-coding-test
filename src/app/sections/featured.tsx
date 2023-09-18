import styles from './featured.module.css';
import Link from 'next/link';

export default function Featured() {
  return (
    <div className={`section ${styles.background}`}>
      <div className={styles.wrapper}>
        <div className={styles.aboutColumn}>
          <span>01 ------------- 03</span>
          <span>(FISHING SERIES)</span>
          <h2 className={styles.header}>F - SERIES</h2>
        </div>
        <div className={styles.aboutColumn}>
          <p>F - Series</p>
          <p>
            WASSP Multibeam finds fish and habitat over a wider area
            than single-beam systems.
          </p>
          <Link href="/">Explore now</Link>
        </div>
      </div>
    </div>
  );
}
