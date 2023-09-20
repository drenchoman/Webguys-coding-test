import styles from './Navbar.module.css';
import menu from '../../../public/icons/Menu.svg';
import logo from '../../../public/icons/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import arrowdown from '../../../public/icons/ArrowDown.svg';

const navOptions = [
  { name: 'Search', url: '/' },
  { name: 'Login', url: '/' },
];

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Image src={logo} alt="WASSP logo" />
      </div>
      <nav className={styles.nav}>
        {navOptions.map((n, i) => (
          <Link key={i} href={n.url}>
            {n.name}
          </Link>
        ))}
        <div className={styles.langWrapper}>
          <span>EN</span>
          <Image src={arrowdown} alt="Arrow down" />
        </div>
        <div className={styles.menuWrapper}>
          <Image src={menu} alt="Menu" />
        </div>
      </nav>
    </div>
  );
}
