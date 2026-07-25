"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Section";
import { navigation, site } from "@/lib/constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner flex h-[7.25rem] items-center justify-between gap-3 lg:gap-5 lg:h-[7.5rem]">
          <a
            href="#top"
            aria-label={`${site.name} — ${site.profession}, ${site.specialty} — на главную`}
            className="group flex min-w-0 shrink-0 flex-col outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)]"
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

          <div className="flex shrink-0 items-center gap-2.5">
            <ButtonLink
              className="header-telegram-button hidden min-h-12 px-5 py-3 text-[0.8rem] lg:inline-flex"
              ariaLabel="Перейти в Telegram Rimma Vera"
            >
              Telegram
            </ButtonLink>
            <ButtonLink
              href={site.instagramUrl}
              variant="secondary"
              className="hidden min-h-12 px-5 py-3 text-[0.8rem] xl:inline-flex"
              ariaLabel="Перейти в Instagram Rimma Vera"
            >
              Instagram
            </ButtonLink>
            <button
              type="button"
              aria-controls={isMenuOpen ? "mobile-navigation" : undefined}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="site-header__menu inline-flex size-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] shadow-[0_4px_16px_rgb(45_37_40_/_0.05)] outline-none transition hover:border-[var(--accent-soft)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] xl:hidden"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--line)] bg-[var(--background)] xl:hidden"
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
              <ButtonLink
                href={site.instagramUrl}
                variant="secondary"
                className="w-full"
                ariaLabel="Перейти в Instagram Rimma Vera"
              >
                Перейти в Instagram
              </ButtonLink>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
