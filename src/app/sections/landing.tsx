import styles from './landing.module.css';
import Button from '../components/Button';

const header = 'MULTIBEAM SONAR PRODUCTS & SOLUTIONS.';
const subheader = 'SEA IT ALL';
const cta =
  'WASSP multi-beam enables sustainable fishing, exploration, and surveys with versality and detail.';

export default function Landing() {
  return (
    <div className={`section ${styles.background}`}>
      <div className={styles.wrapper}>
        <div className={styles.headerwrapper}>
          <h1>
            <span className={styles.subheader}>{subheader}</span>
            <br />
            {header}
          </h1>
        </div>
        <div className={styles.ctawrapper}>
          <p>{cta}</p>
          <Button name="Contact Us" />
        </div>
      </div>
    </div>
  );
}
