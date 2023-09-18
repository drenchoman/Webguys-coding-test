import styles from './about.module.css';
import Image from 'next/image';
import ImageTest from '../components/ImageTest';
import Hemisphere from '../../../public/icons/Hemisphere.svg';
import Layers from '../../../public/icons/Layers.svg';
import Layers2 from '../../../public/icons/Layers2.svg';
import WasspMultibeam from '../../../public/icons/WasspMultibeam.svg';

export default function About() {
  return (
    <div className={`section ${styles.background}`}>
      <div>
        <ImageTest img={Layers} />
      </div>
      <div>
        <div>
          <h2>WELCOME TO THE WORLD OF WASSP MULTIBEAM</h2>
        </div>
        <div>
          <span>01</span>
          <h3>ABOUT WASSP</h3>
          <p>
            WASSP, a powerful multi-beam sounder with 120-degreee
            coverage and models for deep exploration offers unparalled
            accuracy, detail and versatility. Target fish with
            steerable sounders, generate real-time 3d charts, map fish
            in water, and make better decisions with the user-friendly
            advanced mode.
          </p>
        </div>
        <button>Our Story</button>
      </div>
    </div>
  );
}
