import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./ui.module.css";

type SectionProps = {
  children: ReactNode;
  className?: string;
  /** default | tight | loose */
  spacing?: "default" | "tight" | "loose";
};

export function Section({
  children,
  className,
  spacing = "default",
}: SectionProps) {
  const sectionClass =
    spacing === "tight"
      ? styles.sectionTight
      : spacing === "loose"
        ? styles.sectionLoose
        : styles.section;
  return <section className={clsx(sectionClass, className)}>{children}</section>;
}
