import { useState, useEffect } from 'react';
import styles from './Nav.module.css';

const NAV_ITEMS = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo} onClick={(e) => handleNav(e, '#hero')}>
        <span className={styles.logoMark}>YG</span>
        <span className={styles.logoName}>Yared Girma</span>
      </a>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {NAV_ITEMS.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            className={`${styles.link} ${active === item.href ? styles.linkActive : ''}`}
            onClick={(e) => handleNav(e, item.href)}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <span className={styles.linkNum}>0{i + 1}</span>
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className={styles.cta}
          onClick={(e) => handleNav(e, '#contact')}
          data-cursor="CONTACT"
        >
          Hire Me
        </a>
      </div>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
