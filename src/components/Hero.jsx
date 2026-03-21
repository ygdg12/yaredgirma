import { useEffect, useRef } from 'react';
import photo from '../assets/photo.png';
import styles from './Hero.module.css';
import { LocationPinIcon, LightningBoltIcon, LinkIcon } from './PremiumIcons';

export default function Hero() {
  const containerRef = useRef(null);
  const photoRef = useRef(null);
  const yearRef = useRef(null);

  useEffect(() => {
    // Parallax on photo
    const handleMouseMove = (e) => {
      if (!photoRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      photoRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animated year counter
  useEffect(() => {
    const el = yearRef.current;
    if (!el) return;
    let start = 2020;
    const end = new Date().getFullYear();
    const duration = 1500;
    const step = (end - start) / (duration / 16);
    let current = start;
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        el.textContent = end;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className={styles.hero} ref={containerRef}>
      {/* Background elements */}
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow} />

      {/* Top label row */}
      <div className={styles.topRow}>
        <span className={styles.badge}>
          <span className={styles.dot} />
          Available for work
        </span>
        <span className={styles.location}><LocationPinIcon /> Addis Ababa, Ethiopia</span>
      </div>

      {/* Main content: asymmetric split */}
      <div className={styles.content}>
        {/* Left: big typography */}
        <div className={styles.left}>
          <p className={styles.preHeading}>Backend Developer</p>

          <h1 className={styles.heading}>
            <span className={styles.headingLine1}>Crafting</span>
            <span className={styles.headingLine2}>
              <em>Clean</em>
            </span>
            <span className={styles.headingLine3}>APIs</span>
          </h1>

          <p className={styles.sub}>
            Node.js · Express · MongoDB · React
          </p>

          <div className={styles.actions}>
            <a
              href="#projects"
              className={styles.btnPrimary}
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              data-cursor="EXPLORE"
            >
              View my work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#contact"
              className={styles.btnSecondary}
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Let's talk
            </a>
          </div>

          {/* Stats row */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum} ref={yearRef}>2024</span>
              <span className={styles.statLabel}>Since</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>5+</span>
              <span className={styles.statLabel}>Projects live</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>WSU</span>
              <span className={styles.statLabel}>Graduated</span>
            </div>
          </div>
        </div>

        {/* Right: photo composition */}
        <div className={styles.right}>
          <div className={styles.photoFrame}>
            {/* Decorative lines */}
            <div className={styles.frameLine1} />
            <div className={styles.frameLine2} />

            <div className={styles.photoOuter} ref={photoRef}>
              <div className={styles.photoInner}>
                <img src={photo} alt="Yared Girma" className={styles.photo} />
              </div>
              {/* Floating tags */}
              <div className={styles.floatTag1}>
                <span className={styles.floatTagIcon}><LightningBoltIcon /></span>
                <span>Full-Stack Capable</span>
              </div>
              <div className={styles.floatTag2}>
                <span className={styles.floatTagIcon}><LinkIcon /></span>
                <span>API Expert</span>
              </div>
            </div>

            {/* Big number decoration */}
            <div className={styles.bigNum}>YG</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint}>
        <span>Scroll to explore</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
