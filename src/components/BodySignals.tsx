import { Container, Eyebrow, Section } from "@/components/Section";
import { bodySignals } from "@/lib/constants";

export function BodySignals() {
  return (
    <Section className="signals-section">
      <Container>
        <div className="signals-intro">
          <div>
            <Eyebrow>С чем можно прийти</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-5xl leading-[0.92] font-medium tracking-[-0.055em] text-[var(--text)] sm:text-6xl lg:text-7xl">
              Когда старые способы уже не помогают
            </h2>
          </div>
          <p className="max-w-md text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.06rem] sm:leading-8">
            Вам не нужно заранее формулировать «правильный» запрос.
            Достаточно ситуации, которая забирает силы и повторяется.
          </p>
        </div>

        <div className="signals-grid">
          {bodySignals.map((signal) => (
            <article key={signal.title} className="signal-card">
              <div className="signal-card__meta">
                <span>{signal.number}</span>
                <span>{signal.category}</span>
              </div>
              <h3 className="mt-11 font-display text-[1.85rem] leading-[0.94] font-medium tracking-[-0.04em] text-[var(--text)]">
                {signal.title}
              </h3>
              <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
                {signal.text}
              </p>
              <span className="signal-card__tag">{signal.tag}</span>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
