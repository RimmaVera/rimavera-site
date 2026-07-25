import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow } from "@/components/Section";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24"
    >
      <div aria-hidden className="hero-glow hero-glow--left" />
      <div aria-hidden className="hero-glow hero-glow--right" />
      <div aria-hidden className="hero-grain" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 xl:gap-20">
          <div className="relative z-10">
            <Eyebrow>Онлайн-консультирование · 18+</Eyebrow>
            <h1 className="mt-6 max-w-[760px] font-display text-[3.35rem] leading-[0.9] font-medium tracking-[-0.06em] text-[var(--text)] sm:text-7xl lg:text-[5.4rem] xl:text-[6.1rem]">
              Понять, что с вами происходит. Изменить то, что повторяется.
            </h1>
            <p className="mt-7 max-w-xl text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.14rem] sm:leading-8">
              Помогаю разобраться с психосоматикой, тревогой, пищевыми срывами и
              прокрастинацией — бережно, эффективно и без осуждения.
            </p>

            <div className="mt-8 max-w-xl border-l border-[var(--accent-soft)] pl-4">
              <p className="font-display text-2xl leading-tight tracking-[-0.025em] text-[var(--accent)] sm:text-[1.7rem]">
                Не чинить человека.
                <br />
                Распутывать механизм.
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                В центре работы — не ярлык и не «слабая воля», а связь между
                ситуацией, мыслями, эмоциями, телом и действием.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink className="w-full sm:w-auto">
                Получить мини-продукты
              </ButtonLink>
              <ButtonLink className="w-full sm:w-auto" variant="secondary">
                Записаться на сессию
              </ButtonLink>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium tracking-[0.04em] text-[var(--muted)]">
              <span className="inline-flex items-center gap-2">
                <i aria-hidden className="signal-dot" />
                Без давления
              </span>
              <span className="inline-flex items-center gap-2">
                <i aria-hidden className="signal-dot" />
                Без стыда
              </span>
              <span className="inline-flex items-center gap-2">
                <i aria-hidden className="signal-dot" />
                В вашем ритме
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
            <div className="hero-art">
              <div aria-hidden className="hero-art__ring hero-art__ring--one" />
              <div aria-hidden className="hero-art__ring hero-art__ring--two" />
              <div aria-hidden className="hero-art__warmth" />
              <div aria-hidden className="hero-art__silhouette">
                <span className="hero-art__head" />
                <span className="hero-art__shoulders" />
              </div>

              <div className="hero-art__note hero-art__note--thought">
                Мысль
              </div>

              <div className="hero-art__note hero-art__note--emotion">
                Эмоция
              </div>

              <div className="hero-art__note hero-art__note--action">
                Действие
              </div>

              <div className="hero-art__note hero-art__note--body">Тело</div>

              <div className="hero-art__word">
                <span className="hero-art__word-small">
                  Не «что со мной не так?»
                </span>
                <span className="hero-art__word-main">
                  А «как это
                  <br />
                  работает?»
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
