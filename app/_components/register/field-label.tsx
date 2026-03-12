import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  htmlFor?: string;
  required?: boolean;
  size?: "lg" | "sm";
  as?: "label" | "legend" | "p";
  className?: string;
};

export const FieldLabel = ({
  children,
  htmlFor,
  required,
  size = "lg",
  as: Tag = "label",
  className,
}: Props) => (
  <Tag
    {...(Tag === "label" ? { htmlFor } : {})}
    className={cn(
      "block text-gray-900",
      size === "lg" ? "typo-subtitle5 sm:typo-h6 mb-3" : "typo-subtitle4 mb-3",
      className,
    )}
  >
    {children}
    {required && (
      <span className="text-[#F55959] typo-subtitle3 sm:typo-h6"> *</span>
    )}
  </Tag>
);
