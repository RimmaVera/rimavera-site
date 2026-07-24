"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Section";
import { navigation, site } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 10);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled || isMenuOpen
          ? "border-b border-[var(--line)] bg-[rgb(248_241_234_/_0.88)] shadow-[0_12px_35px_rgb(45_37_40_/_0.06)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-[7.25rem] items-center justify-between gap-5 lg:h-[7.5rem]">
          <a
            href="#top"
            aria-label={`${site.name} — ${site.profession}, ${site.specialty} — на главную`}
            className="group flex min-w-0 flex-col outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)]"
            onClick={() => setIsMenuOpen(false)}
          >
            <BrandLogo />
          </a>

          <nav
            aria-label="Основная навигация"
            className="hidden items-center gap-8 xl:flex"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="navigation-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ButtonLink
              className="hidden min-h-12 px-5 py-3 text-[0.8rem] sm:inline-flex"
              ariaLabel="Перейти в Telegram Rimma Vera"
            >
              Telegram
            </ButtonLink>
            <button
              type="button"
              aria-controls={isMenuOpen ? "mobile-navigation" : undefined}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex size-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] shadow-[0_4px_16px_rgb(45_37_40_/_0.05)] outline-none transition hover:border-[var(--accent-soft)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] xl:hidden"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--line)] bg-[rgb(248_241_234_/_0.95)] xl:hidden"
        >
          <Container className="py-4">
            <nav
              aria-label="Мобильная навигация"
              className="flex flex-col gap-1.5"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl px-5 py-4 text-base font-medium text-[var(--text)] transition hover:bg-[var(--surface)]"
                >
                  {item.label}
                </a>
              ))}
              <ButtonLink
                className="mt-3 w-full"
                ariaLabel="Перейти в Telegram Rimma Vera"
              >
                Перейти в Telegram
              </ButtonLink>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
