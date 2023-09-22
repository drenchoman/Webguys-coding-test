import styles from './features.module.css';
import ImageTest from '../components/Image';
import Layers2 from '../../../public/icons/Layers2.svg';
// Can pass through as a prop from page
const features = [
  {
    id: '01',
    name: 'High Resolution Chirp Sounder',
  },
  { id: '02', name: '120° side to side coverage' },
  {
    id: '03',
    name: 'Realtime CDX Mapping',
  },
  {
    id: '04',
    name: 'Realtime 3d View CDX',
  },
  { id: '05', name: 'Backscatter License' },
  { id: '06', name: '1. High Resolution Side Scan' },
  {
    id: '07',
    name: 'Third Party Software Integration',
  },
  { id: '08', name: 'Multiple WASSP Transducers' },
];

export default function Features() {
  return (
    <div className={`section ${styles.background}`}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <span>03</span>
          <h3>FEATURES</h3>
        </div>
        <div className={styles.main}>
          <div className={styles.featuresWrapper}>
            {features.map((f, i) => (
              <div className={styles.feature} key={i}>
                <p>
                  <span>{f.id}</span> {f.name}
                </p>
              </div>
            ))}
          </div>
          <span>08</span>
          <div className={styles.featuresAbout}>
            <h3 className={styles.header}>
              Multiple WASSP Transducers
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Morbi quis commodo odio aenean. Non odio
              euismod lacinia at quis risus sed vulputate.
            </p>
          </div>
          <div className={styles.image}>
            <ImageTest img={Layers2} />
          </div>
        </div>
      </div>
    </div>
  );
}
