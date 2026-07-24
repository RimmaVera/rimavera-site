import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow, Section } from "@/components/Section";
import { privateProduct } from "@/lib/constants";

export function PrivateProduct() {
  return (
    <Section id="private" className="pt-8 sm:pt-12">
      <Container>
        <div className="private-panel">
          <div aria-hidden className="private-panel__halo" />
          <div aria-hidden className="private-panel__line" />
          <div className="relative grid gap-12 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1fr_0.82fr] lg:gap-20 lg:px-16 lg:py-20">
            <div>
              <Eyebrow className="text-[var(--accent-soft)]">
                Закрытый формат
              </Eyebrow>
              <h2 className="mt-5 font-display text-[3.1rem] leading-[0.88] font-medium tracking-[-0.06em] text-[var(--surface)] sm:text-7xl">
                VERA METHOD
                <br />
                PRIVATE
              </h2>
              <p className="mt-7 max-w-xl text-[1rem] leading-7 text-[rgb(255_249_243_/_0.74)] sm:text-[1.1rem] sm:leading-8">
                Закрытый индивидуальный формат для тех, кому нужен глубокий,
                конфиденциальный и персональный перевод языка тела.
              </p>
              <p className="mt-5 max-w-xl text-sm leading-6 text-[rgb(255_249_243_/_0.56)]">
                Для предпринимателей, экспертов, публичных людей и клиентов с
                высоким уровнем ответственности, которые привыкли держать
                контроль, но хотят наконец услышать себя.
              </p>
            </div>

            <div className="private-panel__card">
              <p className="text-[0.67rem] font-semibold tracking-[0.17em] text-[var(--accent-soft)] uppercase">
                Внутри формата
              </p>
              <ul className="mt-7 space-y-4">
                {privateProduct.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-[rgb(255_249_243_/_0.82)]"
                  >
                    <span aria-hidden className="check-mark check-mark--light">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-5 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-display text-[2rem] leading-none tracking-[-0.04em] text-[var(--surface)]">
                  От 150 000 ₽
                </span>
                <ButtonLink variant="light">Обсудить private-формат</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
