import styles from './Button.module.css';
import ArrowRight from '../../../public/icons/ArrowRight.svg';
import Image from 'next/image';
import Link from 'next/link';

// TODO: fix ts error

export default function Button({ name }) {
  return (
    <div className={styles.button}>
      <span>{name}</span>
      <Image
        className={styles.arrow}
        src={ArrowRight}
        alt="Right Arrow"
      />
    </div>
  );
}
