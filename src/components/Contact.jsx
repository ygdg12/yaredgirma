import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';
import { TelegramIcon, WhatsappIcon } from './PremiumIcons';

const EMAIL = 'yaredgirmab1234@gmail.com';
// Gmail compose page (ready to send).
const EMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`;

export default function Contact() {
  const revealRefs = useRef([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('yaredgirmab1234@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>

        {/* Big CTA text */}
        <div className={styles.cta}>
          <div className={`${styles.label} reveal`} ref={el => revealRefs.current[0] = el}>
            <span>Get In Touch</span>
          </div>
          <h2 className={`${styles.title} reveal reveal-delay-1`} ref={el => revealRefs.current[1] = el}>
            Let's build<br />something<br /><em>together.</em>
          </h2>
          <p className={`${styles.sub} reveal reveal-delay-2`} ref={el => revealRefs.current[2] = el}>
            Open to freelance projects, full-time roles, and collaborations. If you have an idea or a role you think I'd be great for — I'd love to hear from you.
          </p>
        </div>

        {/* Contact card */}
        <div className={`${styles.card} reveal reveal-delay-3`} ref={el => revealRefs.current[3] = el}>
          <div className={styles.cardGlow} />

          <p className={styles.cardLabel}>Primary contact</p>
          <a
            href={EMAIL_COMPOSE_URL}
            className={styles.cardEmail}
            data-cursor="EMAIL"
            target="_blank"
            rel="noopener noreferrer"
          >
            yaredgirmab1234<br />@gmail.com
          </a>

          <div className={styles.cardActions}>
            <a
              href={EMAIL_COMPOSE_URL}
              className={styles.btnPrimary}
              data-cursor="EMAIL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send email
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <button
              className={`${styles.btnCopy} ${copied ? styles.copied : ''}`}
              onClick={copyEmail}
              data-cursor="COPY"
            >
              {copied ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="5" y="5" width="8" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M11 5V4a1.5 1.5 0 0 0-1.5-1.5h-5A1.5 1.5 0 0 0 3 4v8a1.5 1.5 0 0 0 1.5 1.5H5" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                  Copy email
                </>
              )}
            </button>
          </div>

          <div className={styles.cardLinks}>
            <a
              href="https://github.com/ygdg12"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              data-cursor="GITHUB"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://t.me/yaredll"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              data-cursor="TELEGRAM"
            >
              <TelegramIcon /> @yaredll
            </a>
            <a
              href="https://wa.me/251980256702"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              data-cursor="WHATSAPP"
            >
              <WhatsappIcon /> +251980256702
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <span className={styles.footerLeft}>© 2025 Yared Girma</span>
        <span className={styles.footerRight}>Designed & built with ♥</span>
      </div>
    </section>
  );
}
