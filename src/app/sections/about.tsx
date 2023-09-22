import styles from './about.module.css';
import arrow from '../../../public/icons/ArrowRight.svg';
import Image from '../components/Image';
import Layers from '../../../public/icons/Layers.svg';
import Button from '../components/Button';
// may need a sepeate component for  mobile view

export default function About() {
  return (
    <div className={`section ${styles.background}`}>
      <div className={styles.imageWrapper}>
        <Image img={Layers} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>WELCOME TO THE WORLD OF WASSP MULTIBEAM</h2>
        </div>
        <div className={styles.aboutRow}>
          <div className={styles.about}>
            <span>01</span>
            <h3 className={styles.desktopHeader}>ABOUT WASSP</h3>
            <h3 className={styles.mobileHeader}>ABOUT</h3>
            <span className={styles.hidden}>x</span>
          </div>

          <div className={styles.aboutColumn}>
            <p>
              WASSP, a powerful multi-beam sounder with 120-degreee
              coverage and models for deep exploration offers
              unparalled accuracy, detail and versatility. Target fish
              with steerable sounders, generate real-time 3d charts,
              map fish in water, and make better decisions with the
              user-friendly advanced mode.
            </p>
            <Button name="Our Story" />
          </div>
        </div>
      </div>
    </div>
  );
}
