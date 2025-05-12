"use client";

import styles from "./skills.module.css";

export default function Skills() {
  const skills = {
    Languages: ["Python", "TypeScript", "C++"],
    Frameworks: ["Next.js", "React", "FastAPI", "PyTorch"],
    Tools: ["Docker", "GitHub Actions", "Vercel", "PostgreSQL"],
  };

  return (
    <div className={styles.container}>
      <h2>Technical Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul className={styles.list}>
            {items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
