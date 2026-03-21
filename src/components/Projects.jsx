import { useEffect, useRef } from 'react';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    id: '01',
    title: 'HRMS Platform',
    subtitle: 'Ziway Rose PLC',
    desc: 'A full-featured Human Resource Management System built during internship. Handles employee records, payroll workflows, leave tracking, and role-based access control.',
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'JWT'],
    url: 'https://ziway-rose-plc-hrms.vercel.app',
    year: '2025',
    type: 'Internship Project',
  },
  {
    id: '02',
    title: 'APOD NASA App',
    subtitle: 'Space Explorer',
    desc: 'A web app that pulls NASA\'s Astronomy Picture of the Day API, letting users browse stunning cosmic imagery with descriptions and date filtering.',
    tags: ['React', 'NASA API', 'Tailwind', 'REST'],
    url: 'https://apod-nasa-theta.vercel.app/',
    year: '2024',
    type: 'API Integration',
  },
  {
    id: '03',
    title: 'FoundCloud',
    subtitle: 'Lost & Found System',
    desc: 'A community platform where users post lost or found items. Features real-time search, image uploads, and a match-notification system to reunite people with their belongings.',
    tags: ['Node.js', 'MongoDB', 'React', 'REST API'],
    url: 'https://foundcloud.vercel.app',
    year: '2024',
    type: 'Full-Stack App',
  },
  {
    id: '04',
    title: 'Gym Tracker',
    subtitle: 'Fitness Dashboard',
    desc: 'A sleek React-based gym management app with workout scheduling, progress tracking, and member management — clean UI built entirely on the frontend.',
    tags: ['React', 'CSS', 'State Management'],
    url: 'https://gymusingreact.netlify.app/',
    year: '2024',
    type: 'Frontend App',
  },
  {
    id: '05',
    title: 'Olmenilotica',
    subtitle: 'olmenilotica.com',
    desc: 'A premium online presence for Olmenilotica.',
    tags: ['Web', 'Design', 'Deployment'],
    url: 'olmenilotica.com',
    year: '2026',
    type: 'Live Website',
  },
];

function normalizeUrl(url) {
  if (!url) return '#';
  const trimmed = String(url).trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
  if (trimmed.startsWith('//')) return `https:${trimmed}`;
  // Treat bare domains like "example.com" as HTTPS.
  return `https://${trimmed.replace(/^\/+/, '')}`;
}

export default function Projects() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    itemRefs.current.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className={styles.section} ref={sectionRef}>
      <div className={styles.header}>
        <div className={`${styles.label} reveal`}>
          <span>Selected Work</span>
        </div>
        <h2 className={`${styles.title} reveal reveal-delay-1`}>
          Things I've<br /><em>Built</em>
        </h2>
        <p className={`${styles.desc} reveal reveal-delay-2`}>
          A selection of projects from freelance work, internship, and personal builds.
        </p>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map((project, i) => {
          const liveUrl = normalizeUrl(project.url);
          return (
            <a
              key={project.id}
              className={`${styles.card} reveal`}
              ref={el => itemRefs.current[i] = el}
              style={{ transitionDelay: `${i * 0.1}s` }}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live site`}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardNum}>{project.id}</span>
                <span className={styles.cardType}>{project.type}</span>
                <span className={styles.cardYear}>{project.year}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardSubtitle}>{project.subtitle}</p>
                <p className={styles.cardDesc}>{project.desc}</p>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <span className={styles.cardLink} data-cursor="OPEN" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Live site
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
