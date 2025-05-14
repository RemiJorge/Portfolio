"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const basePath = process.env.NEXT_BASE_PATH ?? "";

  return (
    <main className={styles.main}>
      <Image
        className={styles.avatar}
        src={`${basePath}/avatar.jpg`}
        alt="Portrait"
        width={200}
        height={200}
        priority
      />
      <h1 className={styles.title}>Hi, I&apos;m Remi</h1>
      <p className={styles.subtitle}>Software & AI Engineer crafting intelligent digital solutions.</p>
      <nav className={styles.links}>
        <Link href="/about">About me</Link>
        <Link href="/education">Education</Link>
        <Link href="/journey">Tech Journey</Link>
        <Link href="/skills">Hard & Soft Skills</Link>
        <Link href="/contact">Contact & References</Link>
      </nav>
      <a className={styles.resume} href={`${basePath}/resume.pdf`} target="_blank">Download Resume</a>
    </main>
  );
}
