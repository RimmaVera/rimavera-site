import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow, Section } from "@/components/Section";
import { miniProduct } from "@/lib/constants";

export function MiniProduct() {
  return (
    <Section id="mini-product" className="relative overflow-hidden">
      <div aria-hidden className="section-orb section-orb--product" />
      <Container className="relative">
        <div className="product-shell">
          <div className="grid gap-10 p-6 sm:p-9 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14 lg:p-14">
            <div>
              <Eyebrow className="text-[var(--accent)]">
                Доступный формат
              </Eyebrow>
              <h2 className="mt-5 max-w-[620px] font-display text-[2.8rem] leading-[0.94] font-medium tracking-[-0.055em] text-[var(--text)] sm:text-6xl">
                {miniProduct.title}
              </h2>
              <p className="mt-6 max-w-xl text-[0.99rem] leading-7 text-[var(--muted)]">
                Мини-практикум для тех, кто хочет остановить автоматическое
                переедание, распознать тревогу и вернуться к себе — дома, в
                гостях, на отдыхе и в любой точке дня.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="price-label">{miniProduct.price}</span>
                <span className="text-xs leading-5 text-[var(--muted)]">
                  Не диета. Не марафон силы воли.
                </span>
              </div>

              <div className="mt-9">
                <ButtonLink>Получить доступ в Telegram</ButtonLink>
              </div>
            </div>

            <aside className="course-card">
              <div className="flex items-start justify-between gap-4">
                <span className="course-card__label">Домашний практикум</span>
                <span className="course-card__days">
                  7 <small>Дней</small>
                </span>
              </div>
              <p className="mt-9 max-w-[18rem] font-display text-[2rem] leading-[0.98] tracking-[-0.045em] text-[var(--surface)]">
                Пауза, в которой можно услышать себя.
              </p>
              <ul className="mt-9 grid gap-3 text-sm text-[rgb(255_249_243_/_0.84)] sm:grid-cols-2">
                {miniProduct.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span aria-hidden className="check-mark check-mark--light">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div aria-hidden className="course-card__curve" />
            </aside>
          </div>

          <div className="grid border-t border-[var(--line)] lg:grid-cols-[0.72fr_1.28fr]">
            <div className="p-6 sm:p-9 lg:border-r lg:border-[var(--line)] lg:p-12">
              <h3 className="font-display text-[2rem] leading-none font-medium tracking-[-0.04em] text-[var(--text)]">
                Для кого
              </h3>
              <ul className="mt-6 space-y-3">
                {miniProduct.audience.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
                    <span aria-hidden className="check-mark">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-9 lg:p-12">
              <h3 className="font-display text-[2rem] leading-none font-medium tracking-[-0.04em] text-[var(--text)]">
                Что внутри
              </h3>
              <ol className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {miniProduct.program.map((lesson) => (
                  <li
                    key={lesson}
                    className="border-b border-[var(--line)] pb-3 text-sm leading-6 text-[var(--muted)]"
                  >
                    {lesson}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <p className="border-t border-[var(--line)] px-6 py-5 text-xs leading-5 text-[var(--muted)] sm:px-9 lg:px-14">
            Практикум не заменяет медицинскую или психотерапевтическую помощь.
            Он создан как мягкий инструмент самонаблюдения и контакта с телом.
          </p>
        </div>
      </Container>
    </Section>
  );
}
