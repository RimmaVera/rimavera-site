import { Container, Eyebrow, Section } from "@/components/Section";
import { bodySignals } from "@/lib/constants";

export function BodySignals() {
  return (
    <Section className="relative overflow-hidden">
      <div aria-hidden className="section-orb section-orb--signals" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-18">
          <div className="max-w-md">
            <Eyebrow>Тело говорит</Eyebrow>
            <h2 className="mt-5 font-display text-5xl leading-[0.96] font-medium tracking-[-0.05em] text-[var(--text)] sm:text-6xl">
              Тело говорит задолго до того, как ты начинаешь слышать.
            </h2>
            <p className="mt-6 text-[0.97rem] leading-7 text-[var(--muted)]">
              Иногда достаточно остановиться не для того, чтобы всё
              исправить, а чтобы честно заметить свой сигнал.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {bodySignals.map((signal, index) => (
              <article
                key={signal.title}
                className={`signal-card signal-card--${index + 1}`}
              >
                <span className="signal-card__number">{signal.number}</span>
                <h3 className="mt-12 font-display text-[2rem] leading-none font-medium tracking-[-0.04em] text-[var(--text)]">
                  {signal.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                  {signal.text}
                </p>
                <span aria-hidden className="signal-card__line" />
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
