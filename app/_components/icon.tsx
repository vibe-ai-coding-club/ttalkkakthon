import { type ReactElement, type SVGProps } from "react";

import { cn } from "@/lib/utils";

export const iconTypes = [
  "twinkle",
  "check",
  "delete",
  "plus",
  "Plus",
  "instagram",
  "linkedin",
] as const;

export type IconType = (typeof iconTypes)[number];

export type IconProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  type: IconType;
  width?: number;
  height?: number;
};

const iconPathMap: Record<Exclude<IconType, "Plus">, ReactElement> = {
  twinkle: (
    <path
      d="M12 1.5L15.182 8.818L22.5 12L15.182 15.182L12 22.5L8.818 15.182L1.5 12L8.818 8.818L12 1.5Z"
      fill="currentColor"
    />
  ),
  check: (
    <path
      d="M3.5 12.5L9 18L20.5 6.5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  delete: (
    <>
      <path
        d="M6 6L18 18"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </>
  ),
  plus: (
    <>
      <path
        d="M12 4V20"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M4 12H20"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </>
  ),
  instagram: (
    <>
      <rect
        x={3}
        y={3}
        width={18}
        height={18}
        rx={5}
        stroke="currentColor"
        strokeWidth={2}
      />
      <circle cx={12} cy={12} r={4} stroke="currentColor" strokeWidth={2} />
      <circle cx={17} cy={7} r={1.3} fill="currentColor" />
    </>
  ),
  linkedin: (
    <>
      <rect
        x={3}
        y={3}
        width={18}
        height={18}
        rx={2.5}
        stroke="currentColor"
        strokeWidth={2}
      />
      <circle cx={8.2} cy={8.2} r={1.3} fill="currentColor" />
      <path
        d="M8.2 11.2V17"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M12 17V11.2"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M12 13.3C12 12.1 12.9 11.2 14.1 11.2C15.3 11.2 16.2 12.1 16.2 13.3V17"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </>
  ),
};

export const Icon = ({
  type,
  width = 24,
  height = 24,
  className,
  ...props
}: IconProps) => {
  const normalizedType = type === "Plus" ? "plus" : type;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block shrink-0", className)}
      aria-hidden="true"
      {...props}
    >
      {iconPathMap[normalizedType]}
    </svg>
  );
};
