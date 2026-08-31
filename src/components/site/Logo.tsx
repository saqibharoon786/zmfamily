import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "nav" | "footer" | "mobile";
  className?: string;
  priority?: boolean;
};

const variantStyles = {
  nav: "h-10 w-auto sm:h-11 md:h-12",
  footer: "h-28 w-auto sm:h-32 md:h-36",
  mobile: "h-9 w-auto",
} as const;

export function Logo({ variant = "nav", className, priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center transition-opacity hover:opacity-90",
        className,
      )}
      aria-label="Z M FAMILY — Home"
    >
      <Image
        src="/logo.png"
        alt="Z M FAMILY — Integrated Services Company in Qatar"
        width={320}
        height={320}
        priority={priority}
        className={cn("object-contain object-left", variantStyles[variant])}
      />
    </Link>
  );
}
