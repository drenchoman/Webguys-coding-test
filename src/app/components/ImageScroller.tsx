import styles from './ImageScroller.module.css';
import Image from 'next/image';
import img5 from '../../../public/images/05.jpg';
import img6 from '../../../public/images/06.jpg';
import img7 from '../../../public/images/07.jpg';
import img8 from '../../../public/images/08.jpg';
import img9 from '../../../public/images/09.jpg';
import img10 from '../../../public/images/10.jpg';
import img11 from '../../../public/images/11.jpg';
import img12 from '../../../public/images/12.jpg';
import img13 from '../../../public/images/13.jpg';
import img14 from '../../../public/images/14.jpg';

const images = [
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];

export default function ImageScroller() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {images.map((image, i) => (
          <div key={i} className={styles.imageWrapper}>
            <Image src={image} alt="Alt" />
          </div>
        ))}
      </div>
    </div>
  );
}
