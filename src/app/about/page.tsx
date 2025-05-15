"use client";

import styles from "./about.module.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className={styles.container}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.title}
      >
        About Me
      </motion.h1>
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className={styles.heading}>👋 Who Am I?</h2>
        <p>
          I’m a dedicated and curious engineer with a deep passion for{" "}
          Artificial Intelligence and Software Engineering. Recently graduated
          from Polytech Montpellier, I specialize in designing and deploying
          AI-powered systems that are both technically robust and operationally
          relevant. Whether it’s building LLM-based diagnostic assistants or
          implementing real-time anomaly detection systems for mission-critical
          environments, I enjoy turning complex problems into elegant,
          data-driven solutions.
        </p>
        <p>
          My background blends a rigorous academic foundation with hands-on
          experience across a range of technologies—from machine learning
          frameworks like PyTorch and TensorFlow, to full-stack web and mobile
          development using Python, React, and Node.js. I take pride in
          delivering high-quality, scalable software, and I’m driven by a core
          belief: that responsible AI can profoundly improve the way we live,
          work, and solve real-world challenges.
        </p>
        <p>
          Beyond the code, I value clarity in design,{" "}
          security in architecture, and{" "}
          collaboration in execution. I thrive in fast-paced
          environments where technical excellence, creativity, and strong
          communication intersect to create meaningful impact.
        </p>
      </motion.section>

      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className={styles.heading}>💡 What Drives Me?</h2>
        <ul className={styles.list}>
          <li>🚀 Tackling meaningful problems with AI and innovative tech</li>
          <li>
            🧠 Learning continuously — currently exploring Golang, and NASM
          </li>
          <li>🤝 Collaborating on high-impact projects with ambitious teams</li>
          <li>
            📈 Applying agile methodologies and strong project management skills
          </li>
        </ul>
      </motion.section>

      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        <h2 className={styles.heading}>🔍 A Note on Projects</h2>
        <p>
          Due to confidentiality constraints, many of my academic and
          professional projects are in private repositories. However, I’m always
          happy to discuss them in detail and provide code samples upon request.
        </p>
      </motion.section>
    </div>
  );
}
