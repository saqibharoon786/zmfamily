"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variants = {
  up: {
    hidden: { opacity: 0, y: 48, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  left: {
    hidden: { opacity: 0, x: -60, filter: "blur(6px)" },
    show: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  right: {
    hidden: { opacity: 0, x: 60, filter: "blur(6px)" },
    show: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1 },
  },
} satisfies Record<string, Variants>;

export function Reveal({
  children,
  delay = 0,
  from = "up",
  className,
}: {
  children: ReactNode;
  delay?: number;
  from?: "up" | "left" | "right" | "scale";
  className?: string;
}) {
  return (
    <motion.div
      className={className ?? ""}
      variants={variants[from]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  fullTitle,
  copy,
  align = "center",
}: {
  eyebrow?: string;
  title?: string;
  accent?: string;
  /** Exact H2 text when audit/spec requires a single uninterrupted heading string. */
  fullTitle?: string;
  copy?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      ) : null}
      <Reveal delay={0.1}>
        <h2 className="mt-5 text-4xl leading-[1.12] font-medium tracking-tight sm:text-5xl">
          {fullTitle ?? (
            <>
              {title}
              {accent ? (
                <>
                  {" "}
                  <em className="text-gold-gradient not-italic">{accent}</em>
                </>
              ) : null}
            </>
          )}
        </h2>
      </Reveal>
      {copy ? (
        <Reveal delay={0.2}>
          <p className="mt-5 text-base leading-relaxed font-medium text-foreground/85 sm:text-lg">
            {copy}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={0.25} from="scale">
        <div
          className={"mt-8 h-px w-28 bg-gold-gradient " + (align === "center" ? "mx-auto" : "")}
        />
      </Reveal>
    </div>
  );
}
