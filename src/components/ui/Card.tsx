import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./ui.module.css";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return <div className={clsx(styles.card, className)}>{children}</div>;
}
