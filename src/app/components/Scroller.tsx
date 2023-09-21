import styles from './Scroller.module.css';
import Image from 'next/image';
import SBG from '../../../public/icons/SbgSystems.svg';
import Hemisphere from '../../../public/icons/Hemisphere.svg';
import Seabots from '../../../public/icons/Seabots.svg';

const items = [
  { name: 'SBG SYSTEMS', image: SBG },
  { name: 'GPA SEABOTS', image: Seabots },
  { name: 'HEMISPHERE', image: Hemisphere },
  { name: 'SBG SYSTEMS', image: SBG },
  { name: 'GPA SEABOTS', image: Seabots },
  { name: 'HEMISPHERE', image: Hemisphere },
];

export default function Scroller() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {items.map((item, i) => (
          <div className={styles.container} key={i}>
            <span className={styles.header}>{item.name}</span>
            <div className={styles.imageWrapper}>
              <Image
                // width={150}
                // height={150}
                src={item.image}
                alt="Logo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
