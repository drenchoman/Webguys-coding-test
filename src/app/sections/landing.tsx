import styles from './landing.module.css';
// import Button from '../components/Button';
import ArrowRight from '../../../public/icons/ArrowRight.svg';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const header = 'MULTIBEAM SONAR PRODUCTS & SOLUTIONS.';
const subheader = 'SEA IT ALL';
const cta =
  'WASSP multi-beam enables sustainable fishing, exploration, and surveys with versality and detail.';

export default function Landing() {
  return (
    <div className={`section ${styles.background}`}>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.headerwrapper}>
          <h1>
            <span className={styles.subheader}>{subheader}</span>
            <br />
            {header}
          </h1>
        </div>
        <div className={styles.ctawrapper}>
          <div className={styles.textwrap}>
            <p>{cta}</p>
          </div>
          <div className={styles.button}>
            <span>Contact Us</span>
            <Image
              className={styles.arrow}
              src={ArrowRight}
              alt="Right Arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
