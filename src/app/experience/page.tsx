"use client";

import { motion, useReducedMotion } from "motion/react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { experiences } from "@/content/profile";
import styles from "./experience.module.css";

export default function ExperiencePage() {
  const reduced = useReducedMotion();
  const spring = reduced
    ? { duration: 0.15 }
    : { type: "spring" as const, stiffness: 320, damping: 28 };

  return (
    <div className={styles.wrap}>
      <Section>
        <PageHeader
          title="Experience"
          subtitle="Production AI, multi-agent systems, and full-stack ownership—from requirements to hardened cloud deployment."
        />
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...spring, delay: reduced ? 0 : index * 0.06 }}
            >
              <Card className={styles.role}>
                <div className={styles.meta}>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.period}>{exp.period}</span>
                  <span className={styles.location}>{exp.location}</span>
                </div>
                <p className={styles.jobTitle}>{exp.role}</p>
                <ul className={styles.list}>
                  {exp.highlights.map((item, hi) => (
                    <li key={hi}>{item}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
