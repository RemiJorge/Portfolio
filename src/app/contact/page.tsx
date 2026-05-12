"use client";

import styles from "./contact.module.css";
import { motion } from "motion/react";
import { PERSON } from "@/content/profile";

export default function Contact() {
  return (
    <div className={styles.container}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className={styles.title}>Contact & references</h1>
        <p className={styles.banner}>{PERSON.openTo}</p>
      </motion.header>

      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <h2>Personal contact</h2>
        <ul className={styles.contactList}>
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${PERSON.phone}`}>{PERSON.phoneDisplay}</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href={PERSON.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/remi-jorge
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href={PERSON.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/remijorge
            </a>
          </li>
        </ul>
      </motion.section>

      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.05 }}
      >
        <h2>References</h2>
        <ul className={styles.referenceList}>
          <li>
            <strong>Tiberiu Stratulat</strong>
            <br />
            <em>Associate Professor in Computer Science</em>
            <br />
            Met at: University of Montpellier and Polytech Montpellier
            (2022–2025)
            <br />
            <q>
              Remi demonstrates exceptional critical thinking and creativity,
              along with strong communication skills.
            </q>
            <br />
            <a href="mailto:stratulat@lirmm.fr">stratulat@lirmm.fr</a>
            <br />
            <a
              href="https://www.linkedin.com/in/tiberiu-stratulat-463b9418/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <strong>Michael Callaghan</strong>
            <br />
            <em>
              Reader at Ulster University. Founder and Chair of GenAIEdu
              Conference
            </em>
            <br />
            Met at: Ulster University during internship (2024)
            <br />
            <q>Remi is a valuable asset to any company.</q>
            <br />
            <a href="mailto:harmonyhill@hotmail.com">harmonyhill@hotmail.com</a>
            <br />
            <a
              href="https://www.linkedin.com/in/michael-callaghan-48977316/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <strong>Vincent Sayoux</strong>
            <br />
            <em>System Designer – Airbus</em>
            <br />
            Met at: Airbus during internship (2025)
            <br />
            <q>One of the best junior engineers I’ve worked with in France.</q>
            <br />
            <a href="mailto:vincent.sayoux@hotmail.fr">
              vincent.sayoux@hotmail.fr
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/vincent-sayoux-a4125177/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </motion.section>

      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.08 }}
      >
        <h2>Send a message</h2>
        <form
          className={styles.form}
          method="POST"
          action={`https://formsubmit.co/${PERSON.email}`}
        >
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" required />
          <button type="submit">Send</button>
        </form>
      </motion.section>
    </div>
  );
}
