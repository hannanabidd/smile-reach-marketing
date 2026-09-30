"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type CSSProperties, type ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const reduceMotion = useReducedMotion();

  // Always render the same motion.div so server and client markup match. The
  // server can't know the motion preference, and React won't patch a
  // mismatched style on hydration, so swapping in a plain div here left
  // reduced-motion visitors stuck on the server's opacity: 0. Under reduced
  // motion the reveal just happens instantly instead.
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: reduceMotion ? "0px" : "-80px" }}
      transition={
        reduceMotion ? { duration: 0 } : { duration: 0.5, delay, ease: "easeOut" }
      }
    >
      {children}
    </motion.div>
  );
}
