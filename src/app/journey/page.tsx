"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./events.module.css";
import clsx from "clsx";

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  image: string;
};

const events: TimelineEvent[] = [
  {
    year: "2025",
    title: "AI Internship at Airbus",
    description: `
I can't disclose too much due to confidentiality, but I joined Airbus to work on AI-driven diagnostics for aviation connectivity systems. My responsibilities included designing and deploying deep learning and machine learning models, as well as integrating Retrieval-Augmented Generation (RAG) pipelines.

This experience strengthened my understanding of real-world AI systems, particularly in critical, safety-first environments.
  `,
    image:
      "airbus.jpg",
  },
  {
    year: "2023",
    title: "First Internship – Introduction to AI (Zumtobel, Austria)",
    description: `
As AI became increasingly popular following OpenAI's early public releases, I secured a research-focused internship at Zumtobel in Austria.

There, I explored supervised and unsupervised machine learning techniques for classification tasks. It was my first hands-on experience with real-world AI workflows — and I knew I wanted to dive deeper.
  `,
    image:
      "zumtobel.jpg",
  },
  {
    year: "2022–2025",
    title: "Engineering School – Software & AI Specialization",
    description: `
After mastering theory in preparatory classes, I transitioned to an engineering school to focus on practical software engineering and artificial intelligence.

I gained experience in full-stack web development, mobile and desktop applications, software architecture, design patterns, DevOps, and cloud deployment. We also had advanced AI courses ranging from traditional ML to deep learning, including a deep dive into Transformer architectures.

Throughout the program, I led numerous individual and team-based projects, which helped me reach the top of my class and graduate with honors.
  `,
    image:
      "ecolepolytech.jpg",
  },
  {
    year: "2019–2022",
    title: "Preparatory Classes – Mathematics, Theory & Logic",
    description: `
For three years, I pursued rigorous studies in a French preparatory program for engineering schools, focusing on mathematics, physics, and theoretical computer science.

I explored complexity theory, logic, formal verification, data structures, and algorithmic optimization. We used OCaml for functional programming and theoretical modeling, while Python was applied for practical algorithmic work.

These intense years refined my analytical thinking, problem-solving ability, and research orientation. I also built my first serious academic projects, often going beyond the syllabus into unexplored areas.
  `,
    image:
      "logic.jpg",
  },
  {
    year: "2017–2018",
    title: "High School – Programming on a Calculator",
    description: `
During high school, I chose an advanced mathematics track, as computer science wasn't offered in a meaningful way. However, we were provided with TI-83 Premium calculators, which supported programming in TI-Basic — a very limited language with just 26 variables, loops, conditionals, and no functions (only GOTO, which I avoided for performance reasons). 

Despite its constraints, I developed several complete video games and mathematical tools, including a turn-based RPG with ~6000 lines of code (on a calculator) — all written linearly due to the lack of functions. Looking back, it felt like programming in a simplified form of assembly.

This experience deeply shaped my understanding of optimization, memory handling, clean loop logic, and low-level thinking — skills that gave me a strong head start in future programming challenges.
    `,
    image:
      "calculator.jpg",
  },
  {
    year: "2015–2016",
    title: "Discovering the Fundamentals with Scratch",
    description: `
Eager to continue after my internship, I enrolled in a new computer science class at my middle school. There, we learned the basics of programming using Scratch — a visual programming platform that introduced me to concepts like conditionals, loops, and even recursion.

I practiced daily, often outpacing the teacher, and discovered a passion that would guide my future. This hands-on period solidified my understanding of core programming logic.
    `,
    image:
      "scratch.jpg",
  },
  {
    year: "2015",
    title: "Observation Internship at ONERA",
    description: `
At just 14 years old, I spent a week at ONERA (The French Aerospace Lab) for my observation internship. I explored how they used supercomputers to simulate fluid dynamics for aircraft and rocket designs.

This was my very first exposure to computer science. I attended an introductory Python session and learned about basic programming concepts — it sparked something in me that would become a life-long passion.
    `,
    image:
      "onera.webp"
  },
];

export default function EventsPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const center = container.clientHeight / 2;
      const distances = refs.current.map(
        (el) =>
          el &&
          Math.abs(
            el.getBoundingClientRect().top -
              container.getBoundingClientRect().top -
              center
          )
      );
      const minIndex = distances.reduce(
        (minIdx, val, idx, arr) =>
          val !== null && val < arr[minIdx || 0]! ? idx : minIdx,
        0
      );
      setActiveIndex(minIndex || 0);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const currentBackground = events[activeIndex]?.image ?? "";

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${currentBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      ref={containerRef}
    >
      <h1 className={styles.title}>My Tech Journey</h1>
      <div className={styles.timeline}>
        {events.map((event, index) => (
          <div
            key={index}
            ref={(el) => {
              refs.current[index] = el;
            }}
            className={clsx(styles.event, {
              [styles.active]: index === activeIndex,
            })}
          >
            <div className={styles.meta}>
              <span className={styles.year}>{event.year}</span>
              <h2 className={styles.eventTitle}>{event.title}</h2>
            </div>
            <p className={styles.description}>{event.description.trim()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
