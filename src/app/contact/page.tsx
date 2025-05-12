"use client";

import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h2>Contact Me</h2>
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
    </div>
  );
}
