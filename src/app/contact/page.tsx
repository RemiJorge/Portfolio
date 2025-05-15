"use client";

import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact & References</h2>

      <section className={styles.section}>
        <h3>Personal Contact</h3>
        <ul className={styles.contactList}>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:remijorge5@gmail.com">remijorge5@gmail.com</a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+33771634485">+33 7 71 63 44 85</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/remi-jorge"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/remi-jorge
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/remijorge"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/remijorge
            </a>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3>References</h3>
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
      </section>

      <section className={styles.section}>
        <h3>Send Me a Message</h3>
        <form
          className={styles.form}
          method="POST"
          action="https://formsubmit.co/remijorge5@gmail.com"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}
