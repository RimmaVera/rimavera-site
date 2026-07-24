import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow, Section } from "@/components/Section";

export function SessionBlock() {
  return (
    <Section id="session">
      <Container>
        <div className="session-panel">
          <div className="relative z-10 grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_0.84fr] lg:gap-20 lg:p-16">
            <div>
              <Eyebrow className="text-[var(--accent)]">Индивидуально</Eyebrow>
              <h2 className="mt-5 font-display text-5xl leading-[0.93] font-medium tracking-[-0.055em] text-[var(--text)] sm:text-6xl">
                Сессия с Rimma Vera
              </h2>
              <p className="mt-6 max-w-2xl text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.08rem] sm:leading-8">
                Индивидуальная психологическая сессия для тех, кто хочет
                разобрать конкретный запрос: тревога, переедание, отношения с
                телом, контроль, стыд, усталость, потеря контакта с собой.
              </p>
              <div className="mt-8">
                <ButtonLink>Записаться на сессию</ButtonLink>
              </div>
            </div>

            <div className="session-panel__aside">
              <span className="session-panel__sign">01</span>
              <p className="font-display text-[2.1rem] leading-[0.98] tracking-[-0.045em] text-[var(--text)] sm:text-[2.55rem]">
                Один запрос.
                <br />
                Одна честная точка,
                <br />
                С которой можно начать.
              </p>
              <span className="mt-8 block text-xs leading-5 tracking-[0.08em] text-[var(--muted)] uppercase">
                Бережно · Конфиденциально · По существу
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
