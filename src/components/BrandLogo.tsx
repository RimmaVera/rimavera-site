import { site } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("brand-lockup", className)}>
      <svg
        className="brand-emblem"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle className="brand-emblem__ring" cx="40" cy="40" r="33" />
        <circle className="brand-emblem__ring" cx="40" cy="40" r="27" />
        <circle className="brand-emblem__ring" cx="40" cy="40" r="21" />
        <text className="brand-emblem__rv" x="40" y="36" textAnchor="middle">
          RV
        </text>
        <path className="brand-emblem__line" d="M27 41H53" />
        <text className="brand-emblem__vera" x="40" y="50" textAnchor="middle">
          VERA
        </text>
      </svg>
      <span className="brand-wordmark">{site.name}</span>
      <span className="brand-profession">{site.profession}</span>
      <span className="brand-specialty">{site.specialty}</span>
    </span>
  );
}
