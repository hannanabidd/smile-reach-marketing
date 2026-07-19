"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: reduceMotion ? 0 : 1.4,
      ease: [0.33, 1, 0.68, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
      onComplete: () => {
        if (reduceMotion) return;
        setSettled(true);
        setTimeout(() => setSettled(false), 240);
      },
    });

    return () => controls.stop();
  }, [isInView, reduceMotion, value]);

  return (
    <span
      ref={ref}
      className={`inline-block transition-transform duration-200 ease-out ${
        settled ? "scale-110" : "scale-100"
      }`}
    >
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
