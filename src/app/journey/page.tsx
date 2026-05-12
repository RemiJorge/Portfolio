"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./events.module.css";
import clsx from "clsx";
import { TIMELINE_EVENTS } from "@/content/profile";
import { assetUrl } from "@/lib/basePath";

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

  const current = TIMELINE_EVENTS[activeIndex];
  const currentBackground = current?.image
    ? assetUrl(`/${current.image}`)
    : "";

  return (
    <div
      className={clsx(styles.container, {
        [styles.gradientBg]: !current?.image,
      })}
      style={
        current?.image
          ? {
              backgroundImage: `url(${currentBackground})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
      ref={containerRef}
    >
      <h1 className={styles.title}>Tech journey</h1>
      <p className={styles.subtitle}>
        From first lines of code to production AI systems — scroll the timeline.
      </p>
      <div className={styles.timeline}>
        {TIMELINE_EVENTS.map((event, index) => (
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
            <p className={styles.description}>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
