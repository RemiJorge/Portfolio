"use client";

import styles from "./about.module.css";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className={styles.container}>
      <motion.header
        className={styles.pageHeader}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className={styles.title}>About</h1>
        <p className={styles.lead}>
          I build production AI systems — multi-agent orchestration, RAG, model
          training and serving, and the DevOps and security practices required to
          run them reliably for real users.
        </p>
      </motion.header>

      <motion.section
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
      >
        <h2 className={styles.heading}>Who I am</h2>
        <p>
          I am an AI/ML engineer with a strong software-engineering backbone. My
          work spans the full lifecycle of intelligent products: clarifying
          requirements with stakeholders, designing retrieval and agentic
          workflows, training and evaluating models, hardening APIs and
          infrastructure, and shipping to the cloud with CI/CD and observability
          in mind.
        </p>
        <p>
          I care about latency, correctness, and maintainability — whether the
          surface is an LLM-powered assistant, a classical ML pipeline, or a
          closed-loop system informed by reinforcement learning. I hold degrees
          from Polytech Montpellier (engineering, honors) after intensive
          preparatory work in mathematics and theoretical computer science; that
          mix shapes how I reason about risk, optimization, and robust design.
        </p>
      </motion.section>

      <motion.section
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, delay: 0.05 }}
      >
        <h2 className={styles.heading}>What I focus on</h2>
        <ul className={styles.list}>
          <li>Production multi-agent systems and RAG at enterprise quality bars.</li>
          <li>Model development: NLP, embeddings, classification/regression, CV, time series.</li>
          <li>Platform work: FastAPI services, containers, Kubernetes, secrets, and secure APIs.</li>
          <li>Team leadership: mentoring, sprint planning, and clear communication across functions.</li>
        </ul>
      </motion.section>

      <motion.section
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        <h2 className={styles.heading}>Projects and confidentiality</h2>
        <p>
          Much of my client and research work lives in private repositories or
          internal environments. I am happy to walk through architecture,
          trade-offs, and outcomes in conversation and to share non-sensitive
          samples when appropriate.
        </p>
      </motion.section>

      <motion.section
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, delay: 0.12 }}
      >
        <h2 className={styles.heading}>Beyond engineering</h2>
        <p>
          For many years I trained and competed in athletics at club level
          (sprints and relays), including appearances at the{" "}
          <strong>French national championships</strong>. That background
          reinforced discipline, resilience under pressure, and how to perform
          when outcomes matter — habits I bring to engineering and leadership.
        </p>
      </motion.section>
    </div>
  );
}
