"use client";

import styles from "./projects.module.css";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveDemo?: string;
};

const projects: Project[] = [
  {
    title: "AI-Powered Resume Scanner",
    description: "A tool that uses NLP to extract and rank skills from resumes.",
    technologies: ["Python", "spaCy", "Streamlit"],
    githubUrl: "https://github.com/username/resume-scanner",
  },
  {
    title: "Real-Time Chat App",
    description: "Fullstack chat app with WebSocket support and auth.",
    technologies: ["Next.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/username/chat-app",
    liveDemo: "https://chat-demo.vercel.app",
  },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.title} className={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.techs}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.tech}>{tech}</span>
              ))}
            </div>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
