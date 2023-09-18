import Image from 'next/image';
import styles from './page.module.css';
import About from './sections/about';
import Featured from './sections/featured';
import Features from './sections/features';
import Footer from './sections/footer';
import Landing from './sections/landing';
import News from './sections/news';
import Testimonials from './sections/testimonials';

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
      <About />
      <Featured />
      <Features />
      <Testimonials />
      <News />
      <Footer />
    </main>
  );
}
