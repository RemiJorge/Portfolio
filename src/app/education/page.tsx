"use client";

import styles from "./education.module.css";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className={styles.container}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <section className={styles.entry}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3><span className={styles.blue}>Polytech Montpellier </span>– Engineering School - Computer Science & Business Management</h3>
          <p className={styles.date}>2022 – 2025</p>
          <p>
            Prestigious French engineering program combining advanced computer
            science with organizational and business acumen. The curriculum
            includes a comprehensive mix of software development, artificial
            intelligence, and management sciences.
          </p>
          <ul className={styles.list}>
            <li>Machine Learning & Deep Learning (CNNs, RNNs, Autoencoders)</li>
            <li>Multi-Agent Systems & Artificial Intelligence</li>
            <li>Software Engineering (Agile, UML, Design Patterns, CI/CD)</li>
            <li>Web & Mobile Development (React, Next.js, REST APIs)</li>
            <li>
              Organizational Information Systems & Business Process Modeling
            </li>
            <li>Financial & Managerial Accounting</li>
            <li>
              Quantum Computing (IBM Qiskit, Grover’s & Shor’s algorithms)
            </li>
            <li>Data Analysis, SQL & NoSQL, Python, R</li>
            <li>Project Management & Communication Skills</li>
          </ul>
        </motion.div>
      </section>

      <section className={styles.entry}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>
            <span className={styles.blue}>Lycée Buffon, Paris </span>- Intensive Preparatory Program (Classe Préparatoire MP*) – Mathematics, Physics and Computer Science
          </h3>
          <p className={styles.date}>2019 – 2022</p>
          <p>
            Highly selective three-year French preparatory program for entrance
            to top engineering schools, specializing in Mathematics and Computer
            Science (MP* track). Renowned for its academic rigor, depth in
            theoretical foundations, and demanding workload. This program also
            included intensive training in Physics and Engineering Sciences.
          </p>
          <ul className={styles.list}>
            <li>
              Advanced Mathematics: Real and Complex Analysis, Linear Algebra,
              Probability Theory
            </li>
            <li>
              Computer Science: Functional Programming in OCaml, Python
              scripting and algorithmic design
            </li>
            <li>
              Theoretical Computer Science: Recursion, Proofs, Logic, Automata
              Theory
            </li>
            <li>
              Physics: Mechanics, Thermodynamics, Electromagnetism, Quantum
              Physics
            </li>
            <li>
              Engineering Sciences: Signal Processing, Systems Modeling,
              Experimental Labs
            </li>
            <li>
              Preparation for National Competitive Exams (Concours Mines,
              Centrale, ENS)
            </li>
            <li>
              High-pressure academic environment that cultivates analytical
              thinking, resilience, and time management
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
