"use client";

import styles from "./ai-portfolio.module.css";

export default function AIPortfolio() {
  return (
    <div className={styles.container}>
      <h2>AI Portfolio</h2>
      <div className={styles.project}>
        <h3>Image Classifier with PyTorch</h3>
        <p>A CNN model trained on CIFAR-10, deployed using FastAPI + Docker.</p>
      </div>
      <div className={styles.project}>
        <h3>Chatbot with Transformers</h3>
        <p>Uses HuggingFace&apos;s pipeline to create a context-aware assistant.</p>
      </div>
    </div>
  );
}
