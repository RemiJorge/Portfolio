"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./events.module.css";
import clsx from "clsx";
import { journeyTimeline } from "@/content/profile";
import { publicAsset } from "@/lib/basePath";

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

  const currentBackground = journeyTimeline[activeIndex]?.image ?? "";

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(105deg, rgba(5, 5, 8, 0.88) 0%, rgba(5, 5, 8, 0.55) 45%, rgba(5, 5, 8, 0.75) 100%), url(${publicAsset(currentBackground)})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
      }}
      ref={containerRef}
    >
      <h1 className={styles.title}>My Tech Journey</h1>
      <p className={styles.lead}>
        From first lines of code to production AI systems.         For a concise CV view, see{" "}
        <Link href="/experience" className={styles.leadLink}>
          Experience
        </Link>
        .
      </p>
      <div className={styles.timeline}>
        {journeyTimeline.map((event, index) => (
          <div
            key={event.title}
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
