import styles from './about.module.css';
import ImageTest from '../components/ImageTest';
import Layers from '../../../public/icons/Layers.svg';

export default function About() {
  return (
    <div className={`section ${styles.background}`}>
      <div className={styles.imageWrapper}>
        <ImageTest img={Layers} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>WELCOME TO THE WORLD OF WASSP MULTIBEAM</h2>
        </div>
        <div className={styles.aboutRow}>
          <div className={styles.about}>
            <span>01</span>
            <h3>ABOUT WASSP</h3>
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
            <div className={styles.button}>
              <span>Our Story</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
