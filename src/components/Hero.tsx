import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow } from "@/components/Section";
import heroPortrait from "../../public/images/rimma-vera/hero-portrait.png";

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
        <div className="grid items-center gap-y-0 lg:grid-cols-[1.04fr_0.96fr] lg:gap-x-12 xl:gap-x-20">
          <div className="relative z-10">
            <Eyebrow>Онлайн/оффлайн-консультирование · 18+</Eyebrow>
            <h1 className="mt-6 max-w-[760px] font-display text-[3.35rem] leading-[0.9] font-medium tracking-[-0.06em] text-[var(--text)] sm:text-7xl lg:text-[5.4rem] xl:text-[6.1rem]">
              Понять, что с вами происходит. Изменить то, что повторяется.
            </h1>
            <p className="mt-7 max-w-xl text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.14rem] sm:leading-8">
              Помогаю разобраться с психосоматикой, тревогой, пищевыми срывами и
              прокрастинацией — бережно, эффективно и без осуждения.
            </p>
          </div>

          <div className="relative mx-auto mt-8 aspect-[5/6] w-full max-w-[520px] overflow-hidden rounded-[24px] border border-[var(--line)] bg-[#2b2426] shadow-[0_24px_70px_rgb(91_47_65_/_0.18)] sm:aspect-[4/5] sm:rounded-[32px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0">
            <Image
              src={heroPortrait}
              alt="Римма Вера — психолог и психосоматолог"
              fill
              priority
              quality={86}
              sizes="(max-width: 1023px) calc(100vw - 40px), 46vw"
              className="object-cover object-[50%_36%] sm:object-[50%_38%]"
            />
          </div>

          <div className="relative z-10 mt-8 flex flex-col lg:col-start-1">
            <div className="order-2 mt-8 max-w-xl border-l border-[var(--accent-soft)] pl-4 lg:order-1 lg:mt-0">
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

            <div className="order-1 flex flex-col gap-3 sm:flex-row lg:order-2 lg:mt-9">
              <ButtonLink className="w-full sm:w-auto">
                Получить мини-продукты
              </ButtonLink>
              <ButtonLink className="w-full sm:w-auto" variant="secondary">
                Записаться на сессию
              </ButtonLink>
            </div>

            <div className="order-3 mt-9 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium tracking-[0.04em] text-[var(--muted)]">
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
        </div>
      </Container>
    </section>
  );
}
