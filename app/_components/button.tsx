import { type ButtonHTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonColor = "primary" | "gary" | "gray";
type ButtonSize = "xsmall" | "small" | "medium" | "large";
type ButtonState = "default" | "hover" | "ghost" | "dragzone";

const sizeClassMap: Record<ButtonSize, string> = {
  xsmall: "h-[34px] px-[14px] py-[6px] rounded-[8px]",
  small: "h-[44px] px-[18px] py-[10px] rounded-[10px]",
  medium: "h-[50px] px-[20px] py-[12px] rounded-[12px]",
  large: "h-[66px] px-[32px] py-[16px] rounded-[16px]",
};

const iconSizeClassMap: Record<ButtonSize, string> = {
  xsmall: "w-[14px] h-[13px]",
  small: "size-[22px]",
  medium: "size-[26px]",
  large: "size-[30px]",
};

const iconGapClassMap: Record<ButtonSize, string> = {
  xsmall: "gap-[4px]",
  small: "gap-[6px]",
  medium: "gap-[8px]",
  large: "gap-[10px]",
};

const textClassMap: Record<ButtonSize, string> = {
  xsmall: "text-[12px] leading-[22px] font-medium tracking-[0px]",
  small: "text-[16px] leading-[24px] font-semibold tracking-[-0.2px]",
  medium: "text-[18px] leading-[26px] font-semibold tracking-[-0.4px]",
  large: "text-[24px] leading-[34px] font-bold tracking-[-0.4px]",
};

const ghostOverrideClassMap: Record<ButtonSize, string> = {
  xsmall: "",
  small: "",
  medium:
    "h-[48px] px-[24px] text-[16px] leading-[24px] tracking-[-0.2px] rounded-[14px]",
  large: "rounded-[18px]",
};

const stateClassMap: Record<"primary" | "gary", Record<ButtonState, string>> = {
  primary: {
    default: "bg-primary-400 text-gray-0 hover:bg-primary-500",
    hover: "bg-primary-500 text-gray-0 hover:bg-primary-500",
    ghost:
      "border border-dashed border-gray-300 bg-gray-0 text-gray-400 hover:border-gray-300 hover:text-gray-400",
    dragzone:
      "border border-primary-100 bg-gray-0 text-primary-100 hover:border-primary-100 hover:text-primary-100",
  },
  gary: {
    default: "bg-gray-100 text-gray-850 hover:bg-gray-200",
    hover: "bg-gray-200 text-gray-850 hover:bg-gray-200",
    ghost:
      "border border-dashed border-gray-300 bg-gray-0 text-gray-500 hover:border-gray-300 hover:text-gray-500",
    dragzone:
      "border border-gray-300 bg-gray-0 text-gray-600 hover:border-gray-300 hover:text-gray-600",
  },
};

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
> & {
  color?: ButtonColor;
  size?: ButtonSize;
  state?: ButtonState;
  leftIcon?: ReactNode;
};

export const Button = ({
  color = "primary",
  size = "medium",
  state = "default",
  leftIcon,
  className,
  type = "button",
  children,
  ...props
}: ButtonProps) => {
  const normalizedColor: "primary" | "gary" = color === "gray" ? "gary" : color;
  const hasIcon = Boolean(leftIcon);

  return (
    <button
      type={type}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center whitespace-nowrap transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        sizeClassMap[size],
        textClassMap[size],
        hasIcon ? iconGapClassMap[size] : "",
        stateClassMap[normalizedColor][state],
        state === "ghost" ? ghostOverrideClassMap[size] : "",
        className,
      )}
      {...props}
    >
      {leftIcon ? (
        <span className={cn("shrink-0", iconSizeClassMap[size])}>
          {leftIcon}
        </span>
      ) : null}
      {children}
    </button>
  );
};
