"use client";

import styles from "./skills.module.css";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    "Programming Languages": [
      {
        name: "Python",
        badge:
          "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue",
      },
      {
        name: "Java",
        badge:
          "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
      },
      {
        name: "C",
        badge:
          "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
      },
      {
        name: "C++",
        badge:
          "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
      },
      {
        name: "C#",
        badge:
          "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white",
      },
      {
        name: "Swift",
        badge:
          "https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white",
      },
      {
        name: "HTML5",
        badge:
          "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      },
      {
        name: "CSS3",
        badge:
          "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      },
      {
        name: "JavaScript",
        badge:
          "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      },
      {
        name: "TypeScript",
        badge:
          "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
      },
      {
        name: "SQL",
        badge:
          "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
      },
      {
        name: "NoSQL",
        badge:
          "https://img.shields.io/badge/NoSQL-005571?style=for-the-badge&logo=mongodb&logoColor=white",
      },
      {
        name: "OCaml",
        badge:
          "https://img.shields.io/badge/OCaml-EC6813?style=for-the-badge&logo=ocaml&logoColor=white",
      },
      {
        name: "Assembly",
        badge:
          "https://img.shields.io/badge/Assembly-525252?style=for-the-badge&logo=assemblyscript&logoColor=white",
      },
      {
        name: "R",
        badge:
          "https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white",
      },
      {
        name: "Scala",
        badge:
          "https://img.shields.io/badge/Scala-DE3423?style=for-the-badge&logo=scala&logoColor=white",
      },
    ],
    "Frameworks & Libraries": [
      {
        name: "TensorFlow",
        badge:
          "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white",
      },
      {
        name: "PyTorch",
        badge:
          "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white",
      },
      {
        name: "Scikit-Learn",
        badge:
          "https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white",
      },
      {
        name: "LangChain",
        badge:
          "https://img.shields.io/badge/LangChain-009688?style=for-the-badge&logo=langchain&logoColor=white",
      },
      {
        name: "React",
        badge:
          "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
      },
      {
        name: "Next.js",
        badge:
          "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
      },
      {
        name: "Angular",
        badge:
          "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white",
      },
      {
        name: "Express.js",
        badge:
          "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
      },
      {
        name: "FastAPI",
        badge:
          "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white",
      },
      {
        name: "JavaFX",
        badge:
          "https://img.shields.io/badge/JavaFX-FF6600?style=for-the-badge&logo=java&logoColor=white",
      },
    ],
    "Dev Tools & Platforms": [
      {
        name: "Docker",
        badge:
          "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
      },
      {
        name: "Vercel",
        badge:
          "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
      },
      {
        name: "GitHub",
        badge:
          "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
      },
      {
        name: "GitLab",
        badge:
          "https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white",
      },
      {
        name: "GitHub Actions",
        badge:
          "https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white",
      },
      {
        name: "CI/CD",
        badge:
          "https://img.shields.io/badge/CI/CD-61DAFB?style=for-the-badge&logo=gitlab&logoColor=white",
      },
      {
        name: "PostgreSQL",
        badge:
          "https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white",
      },
      {
        name: "MongoDB",
        badge:
          "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
      },
      {
        name: "VS Code",
        badge:
          "https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white",
      },
      {
        name: "IntelliJ IDEA",
        badge:
          "https://img.shields.io/badge/IntelliJ%20IDEA-000000?style=for-the-badge&logo=intellijidea&logoColor=white",
      },
      {
        name: "PyCharm",
        badge:
          "https://img.shields.io/badge/PyCharm-000000?style=for-the-badge&logo=pycharm&logoColor=white",
      },
      {
        name: "Unity",
        badge:
          "https://img.shields.io/badge/Unity-000000?style=for-the-badge&logo=unity&logoColor=white",
      },
      {
        name: "GitHub Copilot",
        badge:
          "https://img.shields.io/badge/GitHub%20Copilot-1FAD7F?style=for-the-badge&logo=github&logoColor=white",
      },
      {
        name: "Cursor",
        badge:
          "https://img.shields.io/badge/Cursor-FFD700?style=for-the-badge&logo=code&logoColor=black",
      },
    ],
    "Project Management & DevOps": [
      {
        name: "Agile",
        badge:
          "https://img.shields.io/badge/AGILE-009688?style=for-the-badge&logo=agile&logoColor=white",
      },
      {
        name: "SCRUM",
        badge:
          "https://img.shields.io/badge/SCRUM-0052CC?style=for-the-badge&logo=jira&logoColor=white",
      },
      {
        name: "SAFe",
        badge:
          "https://img.shields.io/badge/SAFe-000000?style=for-the-badge&logo=scrumalliance&logoColor=white",
      },
      {
        name: "Azure DevOps",
        badge:
          "https://img.shields.io/badge/DevOps-4B0082?style=for-the-badge&logo=azuredevops&logoColor=white",
      },
    ],
    "Soft Skills": [
      { name: "Rigorous" },
      { name: "Hard-working" },
      { name: "Strong communication" },
      { name: "Problem-solving skills" },
      { name: "Quick learner" },
      { name: "Leadership potential" },
      { name: "Cross-functional teamwork" },
      { name: "Adaptability" },
    ],
  };

  return (
    <div className={styles.container}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${styles.h2} ${styles.title}`}
      >
        Technical & Soft Skills
      </motion.h2>
      {Object.entries(skills).map(([category, items], index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className={`${styles.category} ${styles.h3}`}>{category}</h3>
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.name} className={styles.skillItem}>
                {"badge" in item ? (
                  <img src={item.badge} alt={item.name} title={item.name} />
                ) : (
                  <span>{item.name}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
