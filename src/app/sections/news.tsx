import styles from './news.module.css';
import Image from 'next/image';
import Boat1 from '../../../public/images/03.jpg';
import Boat2 from '../../../public/images/04.jpg';
import NewsCard from '../components/NewsCard';
// TODO: Side bar can be its own component as repeated between many sections

const news = [
  {
    image: Boat1,
    title:
      'South Pacific reopens for superyachts, a top charter spot.',
  },
  {
    image: Boat2,
    title: "WASSP's Bluebeam brings major feature advancements",
  },
];

export default function News() {
  return (
    <div className={`section ${styles.background}`}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <span>05</span>
          <h3>NEWS</h3>
        </div>
        <div className={styles.main}>
          {news.map((n, i) => (
            <NewsCard key={i} news={n} />
          ))}
        </div>
      </div>
    </div>
  );
}
