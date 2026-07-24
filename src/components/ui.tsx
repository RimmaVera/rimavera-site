import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/landing";

type CTAButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
};

export function CTAButton({
  href = siteConfig.telegramUrl,
  children,
  variant = "primary",
  className,
  external = true,
}: CTAButtonProps) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(
        "inline-flex min-h-13 items-center justify-center rounded-full px-7 py-4 text-sm font-semibold tracking-wide outline-none transition focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-milk sm:px-8 sm:text-[0.95rem]",
        variant === "primary" ? "btn-primary" : "btn-secondary",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 sm:py-28 lg:py-36",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function ExpertPhotoPlaceholder({
  caption,
  subtitle,
  className,
}: {
  caption: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="card-surface relative aspect-[4/5] overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-powder/30 to-sage/25" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-chocolate/20 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-center pb-8">
          <div className="flex h-[72%] w-[58%] flex-col items-center justify-end">
            <div className="relative h-full w-full">
              <div className="absolute bottom-0 left-1/2 h-[88%] w-[72%] -translate-x-1/2 rounded-t-[999px] bg-gradient-to-b from-powder/50 via-warm-brown/25 to-warm-brown/40" />
              <div className="absolute top-[8%] left-1/2 h-[22%] w-[34%] -translate-x-1/2 rounded-full bg-gradient-to-b from-powder/55 to-warm-brown/30" />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-chocolate/55 to-transparent px-5 pb-5 pt-16 text-milk">
          <p className="font-serif text-xl font-semibold">{caption}</p>
          {subtitle && (
            <p className="mt-1 text-sm text-milk/85">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
