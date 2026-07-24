import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow, Section } from "@/components/Section";
import { site } from "@/lib/constants";

export function SocialBlock() {
  return (
    <Section id="contacts" className="pb-20 sm:pb-28 lg:pb-32">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Eyebrow>Контакты и наблюдения</Eyebrow>
            <h2 className="mt-5 font-display text-5xl leading-[0.94] font-medium tracking-[-0.055em] text-[var(--text)] sm:text-6xl">
              Канал «Тело говорит»
            </h2>
            <p className="mt-6 max-w-lg text-[1rem] leading-7 text-[var(--muted)]">
              Короткие наблюдения о теле, тревоге, переедании и честном
              контакте с собой.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink>Перейти в Telegram</ButtonLink>
              <ButtonLink href={site.instagramUrl}>
                Перейти в Instagram
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={site.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card social-card--telegram"
            >
              <span className="social-card__label">Telegram</span>
              <span className="social-card__handle">{site.telegramHandle}</span>
              <ArrowUpRight
                aria-hidden
                className="social-card__icon"
                size={21}
              />
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card social-card--instagram"
            >
              <span className="social-card__label">Instagram</span>
              <span className="social-card__handle">
                {site.instagramHandle}
              </span>
              <ArrowUpRight
                aria-hidden
                className="social-card__icon"
                size={21}
              />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
