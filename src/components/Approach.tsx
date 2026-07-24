import { Container, Eyebrow, Section } from "@/components/Section";
import { approachPrinciples } from "@/lib/constants";

export function Approach() {
  return (
    <Section id="approach" className="approach-section">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.72fr] lg:gap-20">
          <div>
            <Eyebrow>О подходе</Eyebrow>
            <h2 className="mt-5 font-display text-5xl leading-[0.92] font-medium tracking-[-0.055em] text-[var(--text)] sm:text-6xl lg:text-7xl">
              Психология <span className="text-[var(--accent)]">·</span> Тело{" "}
              <span className="text-[var(--accent)]">·</span> Ты
            </h2>
          </div>
          <p className="max-w-xl text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.08rem] sm:leading-8">
            Подход Rimma Vera соединяет психологическую ясность, телесную
            внимательность и честный контакт с собой. Не через давление и
            стыд, а через наблюдение, язык тела и мягкое возвращение в
            настоящее.
          </p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-3 lg:mt-16">
          {approachPrinciples.map((principle, index) => (
            <article key={principle.title} className="principle-card">
              <span className="principle-card__number">
                0{index + 1}
              </span>
              <h3 className="mt-9 font-display text-[1.8rem] leading-none font-medium tracking-[-0.035em] text-[var(--text)]">
                {principle.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
                {principle.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
