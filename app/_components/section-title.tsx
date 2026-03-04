import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Chip } from "./chip";

export type SectionTitleProps = HTMLAttributes<HTMLDivElement> & {
  chipLabel: string;
  title: string;
};

export const SectionTitle = ({
  chipLabel,
  title,
  className,
  ...props
}: SectionTitleProps) => {
  return (
    <div
      className={cn("flex w-full flex-col items-center justify-center gap-4 md:gap-[22px]", className)}
      {...props}
    >
      <Chip label={chipLabel} />
      <h2 className="typo-h5 text-center text-gray-900 md:typo-h3">{title}</h2>
    </div>
  );
};
