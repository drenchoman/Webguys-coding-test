import styles from './NewsCard.module.css';
import Image from 'next/image';
import ArrowRight from '../../../public/icons/ArrowRight.svg';
// TODO: Remove eslint warning for prop type

export default function NewsCard({ news }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image width={275} height={200} alt="Boat" src={news.image} />
      </div>
      <h3>{news.title}</h3>
      <div className={styles.row}>
        <span>View</span>
        <Image
          className={styles.arrow}
          src={ArrowRight}
          alt="Right Arrow"
        />
      </div>
    </div>
  );
}
