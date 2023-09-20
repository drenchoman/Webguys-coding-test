import styles from './footer.module.css';
import Link from 'next/link';
import Button from '../components/Button';
const footerLinks = [
  { name: 'Home', url: '/' },
  { name: 'Products', url: '/' },
  { name: 'AboutENL', url: '/' },
  { name: 'Multibeam Technology', url: '/' },
  { name: 'News', url: '/' },
  { name: 'Resources', url: '/' },
  { name: 'Contact', url: '/' },
];

const footerSocials = [
  { name: 'Facebook', url: '/' },
  { name: 'Instagram', url: '/' },
  { name: 'Youtube', url: '/' },
];

const footerCTA =
  'Dui duis facilisis id et ullamcorper diam est, Vulputate ac magna in id.';

export default function Footer() {
  return (
    <div className={`section ${styles.background}`}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <p>{footerCTA}</p>
          <Button name="Contact" />
          <Link href="/">Subscribe to our newsletter</Link>
        </div>
        <div className={styles.navbar}>
          <div className={styles.navwrapper}>
            <div className={styles.leftNav}>
              <div className={styles.linksWrapper}>
                {footerLinks.map((f, i) => (
                  <Link key={i} href={f.url}>
                    {f.name}
                  </Link>
                ))}
              </div>
              <div className={styles.socialWrapper}>
                {footerSocials.map((f, i) => (
                  <Link key={i} href={f.url}>
                    {f.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.rightNav}>
              <div className={styles.officeWrapper}>
                <h3>Offices</h3>
                <h4>Auckland - NZ</h4>
                <h4>Essex - UK</h4>
              </div>
              <span>©2023 WASSP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
