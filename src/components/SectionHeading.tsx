import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-4xl md:mb-16",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2 className="font-serif text-[2.35rem] leading-[1.04] font-semibold tracking-[-0.035em] text-chocolate sm:text-5xl lg:text-[3.45rem] lg:leading-[1.06]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-warm-brown/85 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
