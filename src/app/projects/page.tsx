"use client";

import styles from "./projects.module.css";
import Link from "next/link";


export default function Projects() {
  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <p>Coming very soon, meanwhile, you can check my <Link href="https://github.com/RemiJorge" target="_blank">GitHub</Link> for some of my work.</p>
    </div>
  );
}
