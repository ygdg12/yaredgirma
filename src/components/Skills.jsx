import { useEffect, useRef } from 'react';
import styles from './Skills.module.css';
import { GearIcon, DatabaseIcon, PaletteIcon, WrenchIcon } from './PremiumIcons';

const SKILL_GROUPS = [
  {
    category: 'Backend',
    icon: <GearIcon />,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'JWT Auth', level: 85 },
    ],
  },
  {
    category: 'Databases',
    icon: <DatabaseIcon />,
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'MySQL', level: 80 },
      { name: 'Mongoose ODM', level: 85 },
    ],
  },
  {
    category: 'Frontend',
    icon: <PaletteIcon />,
    skills: [
      { name: 'React', level: 82 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    category: 'Tools',
    icon: <WrenchIcon />,
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Vercel / Netlify', level: 82 },
      { name: 'Postman', level: 88 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

function SkillBar({ name, level, delay }) {
  const barRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setTimeout(() => {
            el.style.width = level + '%';
          }, delay);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el.parentElement);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div className={styles.skill}>
      <div className={styles.skillTop}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.skillTrack}>
        <div
          className={styles.skillBar}
          ref={barRef}
          style={{ width: '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.header}>
        <div className={`${styles.label} reveal`} ref={el => revealRefs.current[0] = el}>
          <span>Skills & Tools</span>
        </div>
        <h2 className={`${styles.title} reveal reveal-delay-1`} ref={el => revealRefs.current[1] = el}>
          What I work<br /><em>with.</em>
        </h2>
      </div>

      <div className={styles.grid}>
        {SKILL_GROUPS.map((group, gi) => (
          <div
            key={group.category}
            className={`${styles.group} reveal`}
            ref={el => revealRefs.current[gi + 2] = el}
            style={{ transitionDelay: `${gi * 0.1}s` }}
          >
            <div className={styles.groupHeader}>
              <span className={styles.groupIcon}>{group.icon}</span>
              <h3 className={styles.groupTitle}>{group.category}</h3>
            </div>
            <div className={styles.skillList}>
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={gi * 100 + si * 80}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tech stack pill strip */}
      <div className={`${styles.strip} reveal`} ref={el => revealRefs.current[10] = el}>
        {['Node.js', 'Express', 'MongoDB', 'React', 'MySQL', 'JWT', 'Tailwind', 'REST', 'Git', 'Vercel', 'Postman', 'JavaScript'].map(t => (
          <span key={t} className={styles.pill}>{t}</span>
        ))}
      </div>
    </section>
  );
}
