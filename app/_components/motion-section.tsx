"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export const MotionSection = ({
  children,
  className,
  delay = 0,
}: MotionSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

type MotionItemProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export const MotionItem = ({
  children,
  className,
  delay = 0,
  y = 30,
}: MotionItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
