import Link from "next/link";
import styles from "./projects.module.css";
import { Button } from "@/components/ui/Button";
import { identity } from "@/content/profile";

export default function Projects() {
  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <p>
        A curated write-up is coming soon. Until then, explore public work on
        GitHub and my professional timeline on{" "}
        <Link href="/experience">Experience</Link>.
      </p>
      <p className={styles.actions}>
        <Button href={identity.githubUrl} variant="primary" external>
          GitHub
        </Button>
      </p>
    </div>
  );
}
