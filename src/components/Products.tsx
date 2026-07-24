import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow, Section } from "@/components/Section";
import { products } from "@/lib/constants";

export function Products() {
  return (
    <Section id="products" className="products-section">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>Услуги и продукты</Eyebrow>
            <h2 className="mt-5 font-display text-5xl leading-[0.94] font-medium tracking-[-0.055em] text-[var(--text)] sm:text-6xl">
              Маленькие форматы
              <br />
              для большой паузы
            </h2>
          </div>
          <p className="max-w-xl text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.08rem] sm:leading-8">
            Материалы, к которым можно вернуться в тот момент, когда хочется
            остановиться, услышать себя и выбрать другое действие.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.title}
              className={`product-offer product-offer--${product.style}`}
            >
              <div>
                <span className="product-offer__type">{product.type}</span>
                <h3 className="mt-8 max-w-md font-display text-[2.45rem] leading-[0.92] font-medium tracking-[-0.05em] sm:text-5xl">
                  {product.title}
                </h3>
                <p className="mt-6 max-w-md text-[0.96rem] leading-7">
                  {product.text}
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-5 border-t border-current/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <span className="product-offer__price">{product.price}</span>
                <ButtonLink
                  variant={product.style === "cards" ? "light" : "primary"}
                >
                  {product.cta}
                </ButtonLink>
              </div>

              <span aria-hidden className="product-offer__orb" />
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
