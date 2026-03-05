import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Chip } from "./chip";

export type SectionTitleProps = HTMLAttributes<HTMLDivElement> & {
  chipClassName?: string;
  chipLabel: string;
  title: string;
  titleClassName?: string;
};

export const SectionTitle = ({
  chipClassName,
  chipLabel,
  title,
  titleClassName,
  className,
  ...props
}: SectionTitleProps) => {
  return (
    <div
      className={cn("flex w-full flex-col items-center justify-center gap-4 md:gap-[22px]", className)}
      {...props}
    >
      <Chip label={chipLabel} className={chipClassName} />
      <h2 className={cn("typo-h5 text-center text-gray-900 md:typo-h3", titleClassName)}>{title}</h2>
    </div>
  );
};
