import styles from "./ui.module.css";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className={styles.pageHeader}>
      <h1>{title}</h1>
      {subtitle ? <p>{subtitle}</p> : null}
      <span className={styles.pageHeaderAccent} aria-hidden />
    </header>
  );
}
