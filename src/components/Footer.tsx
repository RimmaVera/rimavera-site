import { BrandLogo } from "@/components/BrandLogo";
import { Container } from "@/components/Section";
import { site } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)]">
      <Container className="py-10 sm:py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <a
            href="#top"
            aria-label={`${site.name} — ${site.profession}, ${site.specialty} — на главную`}
            className="group brand-logo-link"
          >
            <BrandLogo className="brand-lockup--footer" />
          </a>

          <nav
            aria-label="Ссылки в подвале"
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--muted)]"
          >
            <a
              href={site.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Telegram
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Instagram
            </a>
          </nav>
        </div>

        <div className="mt-9 flex flex-col gap-4 border-t border-[var(--line)] pt-5 text-xs leading-5 text-[var(--muted)] sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-3xl">
            Материалы сайта носят информационный характер и не заменяют
            медицинскую или психотерапевтическую помощь.
          </p>
          <p className="shrink-0">© {site.year} VERA</p>
        </div>
      </Container>
    </footer>
  );
}
