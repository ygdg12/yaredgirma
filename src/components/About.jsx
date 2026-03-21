import { useEffect, useRef } from 'react';
import photo from '../assets/photo.png';
import styles from './About.module.css';
import { EducationCapIcon, LocationPinIcon, BriefcaseIcon, LightningBoltIcon, TelegramIcon, WhatsappIcon } from './PremiumIcons';

const EMAIL = 'yaredgirmab1234@gmail.com';
// Gmail compose page (ready to send).
const EMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`;
const TELEGRAM_URL = 'https://t.me/yaredll';
const WHATSAPP_URL = 'https://wa.me/251980256702';

const HIGHLIGHTS = [
  { icon: <EducationCapIcon />, label: 'Education', value: 'BSc Information Systems', sub: 'Wolaita sodo University, 2021' },
  { icon: <LocationPinIcon />, label: 'Location', value: 'Addis Ababa', sub: 'Ethiopia' },
  { icon: <BriefcaseIcon />, label: 'Status', value: 'Open to Work', sub: 'Freelance & Full-time' },
  { icon: <LightningBoltIcon />, label: 'Focus', value: 'Backend Systems', sub: 'APIs & Databases' },
];

export default function About() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const r = (el, i) => revealRefs.current[i] = el;

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>

        {/* Left: photo + info cards */}
        <div className={`${styles.left} reveal`} ref={el => r(el, 0)}>
          <div className={styles.photoWrap}>
            <img src={photo} alt="Yared Girma" className={styles.photo} />
            <div className={styles.photoOverlay} />
            <div className={styles.photoBadge}>
              <span className={styles.photoBadgeNum}>2+</span>
              <span className={styles.photoBadgeLabel}>Years building</span>
            </div>
          </div>

          <div className={styles.cards}>
            {HIGHLIGHTS.map((h, i) => (
              <div key={h.label} className={`${styles.card} reveal`} ref={el => r(el, i + 1)} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className={styles.cardIcon}>{h.icon}</span>
                <div>
                  <p className={styles.cardLabel}>{h.label}</p>
                  <p className={styles.cardValue}>{h.value}</p>
                  <p className={styles.cardSub}>{h.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: text */}
        <div className={styles.right}>
          <div className={`${styles.label} reveal`} ref={el => r(el, 5)}>
            <span>About Me</span>
          </div>

          <h2 className={`${styles.title} reveal reveal-delay-1`} ref={el => r(el, 6)}>
            A developer who<br />cares about the<br /><em>details.</em>
          </h2>

          <div className={`${styles.body} reveal reveal-delay-2`} ref={el => r(el, 7)}>
            <p>
              I'm Yared a backend-focused developer based in Addis Ababa. I build clean, scalable APIs and full-stack systems that actually work in the real world.
            </p>
            <p>
              My stack is centered around <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>, with React on the frontend when needed. I love the process of turning messy requirements into elegant, maintainable code.
            </p>
           
          </div>

          <div className={`${styles.links} reveal reveal-delay-3`} ref={el => r(el, 8)}>
            <a
              href="https://github.com/ygdg12"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              data-cursor="VISIT"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              github.com/ygdg12
            </a>
            <a
              href={EMAIL_COMPOSE_URL}
              className={styles.link}
              data-cursor="EMAIL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              yaredgirmab1234@gmail.com
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              data-cursor="TELEGRAM"
            >
              <TelegramIcon /> @yaredll
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              data-cursor="WHATSAPP"
            >
              <WhatsappIcon /> +251980256702
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
