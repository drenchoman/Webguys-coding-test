import styles from './testimonials.module.css';

const content = {
  quote:
    '"WASSP LETS ME GO TO WHERE I WOULD NEVER HAVE FISHED BEFORE, GIVING ME A HIGHER CATCH WITH REDUCED FUEL CONSUMPTION."',
  name: 'Dominique Faou',
  occupation: 'Owner/Skipper, France',
};

export default function Testimonials() {
  return (
    <div className={`section ${styles.background}`}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <span>04</span>
          <h3>TESTIMONIALS</h3>
        </div>
        <div className={styles.main}>
          <p className={styles.quote}>{content.quote}</p>
          <p className={styles.name}>{content.name}</p>
          <p className={styles.name}>{content.occupation}</p>
        </div>
      </div>
    </div>
  );
}
