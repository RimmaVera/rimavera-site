import type { ReactNode } from "react";
import { site } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  ariaLabel?: string;
};

export function ButtonLink({
  children,
  href = site.telegramUrl,
  variant = "primary",
  className,
  ariaLabel,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(`button-link button-link--${variant}`, className)}
    >
      <span>{children}</span>
      <span aria-hidden className="button-link__arrow">
        ↗
      </span>
    </a>
  );
}
