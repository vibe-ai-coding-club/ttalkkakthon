import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
  variant?: "default" | "white";
  className?: string;
};

export const Logo = ({ variant = "default", className }: LogoProps) => {
  return (
    <span className={cn("inline-block shrink-0", className)}>
      <Image
        src={`/logo/tkt-logo-pc-${variant}.png`}
        alt="딸깍톤"
        width={88}
        height={42}
        className="hidden sm:block"
        priority
      />
      <Image
        src={`/logo/tkt-logo-mobile-${variant}.png`}
        alt="딸깍톤"
        width={51}
        height={24}
        className="block sm:hidden"
        priority
      />
    </span>
  );
};
