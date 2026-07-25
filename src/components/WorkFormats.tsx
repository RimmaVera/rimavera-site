import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow, Section } from "@/components/Section";
import { workFormats } from "@/lib/constants";

export function WorkFormats() {
  return (
    <Section id="formats" className="work-formats-section">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>Форматы работы</Eyebrow>
            <h2 className="mt-5 max-w-[620px] font-display text-5xl leading-[0.93] font-medium tracking-[-0.055em] text-[var(--text)] sm:text-6xl">
              Столько поддержки,
              <br />
              сколько вам нужно
            </h2>
          </div>
          <p className="max-w-xl text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.08rem] sm:leading-8">
            Можно прийти за ясностью на одну встречу, получить мини-продукт для
            самостоятельной работы или выбрать цикл для устойчивого
            изменения сценария.
          </p>
        </div>

        <div className="work-formats-grid">
          {workFormats.map((format) => (
            <article
              id={format.id}
              key={format.title}
              className={`work-format-card work-format-card--${format.variant}`}
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="work-format-card__number">
                    {format.number}
                  </span>
                  <span className="work-format-card__type">{format.type}</span>
                </div>
                <h3 className="mt-9 font-display text-[2rem] leading-[0.92] font-medium tracking-[-0.045em]">
                  {format.title}
                </h3>
                <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--muted)]">
                  {format.text}
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 border-t border-current/12 pt-5">
                {format.secondaryFormat && (
                  <span className="work-format-card__extra">
                    {format.secondaryFormat}
                  </span>
                )}
                {format.price && (
                  <span className="work-format-card__price">{format.price}</span>
                )}
                <ButtonLink
                  href={format.href}
                  variant={format.variant === "private" ? "light" : "primary"}
                  className="w-full justify-between"
                >
                  {format.cta}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
