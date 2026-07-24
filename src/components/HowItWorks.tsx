import { Container, Eyebrow, Section } from "@/components/Section";
import { workSteps } from "@/lib/constants";

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="how-it-works-section">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>Как я работаю</Eyebrow>
            <h2 className="mt-5 font-display text-5xl leading-[0.93] font-medium tracking-[-0.055em] text-[var(--text)] sm:text-6xl">
              Три шага
              <br />
              к пониманию себя
            </h2>
          </div>
          <p className="max-w-xl text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.08rem] sm:leading-8">
            Не ищем быстрый способ всё исправить. Сначала замечаем, что
            происходит, затем называем это и выбираем опору, которая подходит
            именно вам.
          </p>
        </div>

        <ol className="work-steps">
          {workSteps.map((step) => (
            <li key={step.number} className="work-step">
              <span className="work-step__number">{step.number}</span>
              <h3 className="mt-12 font-display text-[2rem] leading-none font-medium tracking-[-0.04em] text-[var(--text)]">
                {step.title}
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--muted)]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="work-process__price">Цена: 2 490 ₽</p>
      </Container>
    </Section>
  );
}
