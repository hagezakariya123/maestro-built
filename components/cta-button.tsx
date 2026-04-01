import Link from "next/link";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  size?: "default" | "sm";
  className?: string;
  onClick?: () => void;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
  onClick,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-3 border border-white px-5 transition-colors duration-300",
        variant === "primary"
          ? "bg-white text-stone-950 hover:bg-transparent hover:text-white"
          : variant === "light"
            ? "bg-white text-stone-950 hover:bg-stone-950 hover:text-stone-50"
            : "bg-transparent text-white hover:bg-white hover:text-stone-950",
        size === "default" ? "min-h-12 text-sm" : "min-h-10 text-xs uppercase tracking-[0.22em]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
