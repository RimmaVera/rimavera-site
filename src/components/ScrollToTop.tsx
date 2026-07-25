"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Вернуться наверх"
      title="Наверх"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-5 top-[8.25rem] z-[60] inline-flex size-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--accent)] shadow-[0_12px_30px_rgb(45_37_40_/_0.13)] outline-none transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-soft)] hover:bg-[var(--accent)] hover:text-[var(--surface)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] lg:top-6 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp aria-hidden size={20} strokeWidth={1.8} />
    </button>
  );
}
